import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const mdDir = join(__dirname, "..", "src", "assets", "md files")
const outDir = join(__dirname, "..", "src", "data", "archive")

mkdirSync(outDir, { recursive: true })

const hasCyrillic = (s) => /[\u0400-\u04FF]/u.test(s)

function preprocess(content) {
  let text = content

  text = text.replace(/^PAGE\s+\d+$/gm, "")
  text = text.replace(/^_\s*_cft.*$/gm, "")
  text = text.replace(/^_\s*_tn.*$/gm, "")

  text = text.replace(/\\\n/g, " ")
  text = text.replace(/\n\\/g, " ")

  const processedLines = []
  for (const l of text.split("\n")) {
    let line = l.replace(/HYPERLINK\s+"[^"]*"\s*("[^"]*")?\s*\\?/g, "")
    line = line.replace(/\[?https?:\/\/[^\s"\]>]+/g, "")
    line = line.replace(/&amp;/g, "&")
    line = line.replace(/\\\s*/g, " ").trim()
    if (line) {
      processedLines.push(line)
    } else {
      processedLines.push("")
    }
  }

  const collapsed = []
  let prevEmpty = false
  for (const p of processedLines) {
    if (p === "") {
      if (!prevEmpty) {
        collapsed.push("")
        prevEmpty = true
      }
    } else {
      collapsed.push(p)
      prevEmpty = false
    }
  }

  text = collapsed.join("\n")

  return text
}

function findBoldSections(text) {
  const sections = []
  const pattern = /\*\*(.+?)\*\*/gs
  let match

  while ((match = pattern.exec(text)) !== null) {
    const boldText = match[1].trim()
    if (boldText.length >= 3 && hasCyrillic(boldText)) {
      sections.push({
        title: boldText,
        start: match.index,
        end: match.index + match[0].length,
      })
    }
  }

  return sections
}

function parseContent(content) {
  const text = preprocess(content)
  const boldSections = findBoldSections(text)

  if (boldSections.length === 0) {
    return { mainTitle: "", entries: [] }
  }

  const mainTitle = boldSections[0].title

  const entrySections = boldSections.slice(1)

  if (entrySections.length === 0) {
    const body = text.slice(boldSections[0].end).trim()
    return { mainTitle, entries: [{ title: mainTitle, titleAlt: undefined, paragraphs: body ? [body] : [] }] }
  }

  const entries = []
  for (let i = 0; i < entrySections.length; i++) {
    const current = entrySections[i]
    const next = i + 1 < entrySections.length ? entrySections[i + 1] : null

    const bodyStart = current.end
    const bodyEnd = next ? Math.max(0, next.start - 1) : text.length
    const bodyText = text.slice(bodyStart, bodyEnd).trim()

    const paragraphs = bodyText.split("\n\n").map((p) => p.trim()).filter(Boolean)

    if (paragraphs.length > 0 || i === entrySections.length - 1) {
      const title = current.title
      const titleAlt = undefined

      const date = extractDate(paragraphs)
      const description = extractDescription(paragraphs)

      if (title.includes(" - ") && paragraphs.length > 0) {
        const parts = title.split(" - ")
        if (parts.length >= 2 && hasCyrillic(parts[0]) && /[a-zA-Z]{2,}/.test(parts.slice(1).join(" "))) {
          entries.push({
            title: parts[0].trim(),
            titleAlt: parts.slice(1).join(" - ").trim(),
            date,
            description,
            paragraphs,
            paragraphsAlt: undefined,
          })
          continue
        }
      }

      entries.push({ title, titleAlt, date, description, paragraphs, paragraphsAlt: undefined })
    }
  }

  if (entries.length > 0) {
    splitBilingualContent(entries)
  }

  return { mainTitle, entries }
}

function extractDate(paragraphs) {
  if (!paragraphs || paragraphs.length === 0) return undefined
  const first = paragraphs[0]
  const m = first.match(/Дана,?\s+(\d{2}\.\s*\d{1,2}\.\s*\d{4}\.)/)
  if (m) return m[1].replace(/\s+/g, "")
  const m2 = first.match(/(\d{2}\.\s*\d{1,2}\.\s*\d{4}\.)/)
  return m2 ? m2[1].replace(/\s+/g, "") : undefined
}

function extractDescription(paragraphs) {
  if (!paragraphs || paragraphs.length === 0) return undefined
  const first = paragraphs[0].replace(/\s+/g, " ").trim()
  let desc = first.replace(/^Дана,?\s+\d{2}\.\s*\d{1,2}\.\s*\d{4}\.\s+године[,\s]*/i, "")
  desc = desc.split(/[.!?]/).filter(Boolean)[0]
  if (desc) {
    desc = desc.trim()
    if (desc.length > 120) desc = desc.slice(0, 117).trimEnd() + "..."
    return desc
  }
  return undefined
}

function splitBilingualContent(entries) {
  for (const entry of entries) {
    const cyrParas = []
    const latParas = []

    for (const p of entry.paragraphs) {
      const hasCyr = hasCyrillic(p)
      const hasLat = /[a-zA-Z]{2,}/.test(p)

      if (hasCyr && !hasLat) {
        cyrParas.push(p)
      } else if (hasLat && !hasCyr) {
        latParas.push(p)
      } else if (hasCyr && hasLat) {
        cyrParas.push(p)
      } else {
        cyrParas.push(p)
      }
    }

    entry.paragraphs = cyrParas
    if (latParas.length > 0) {
      entry.paragraphsAlt = latParas
    }
  }
}

const files = readdirSync(mdDir).filter((f) => f.endsWith(".md"))

for (const file of files) {
  const content = readFileSync(join(mdDir, file), "utf-8")
  const result = parseContent(content)

  const yearMatch = file.match(/(\d{4})/)
  const year = yearMatch ? Number(yearMatch[1]) : 0

  const data = { year, title: result.mainTitle, entries: result.entries }

  const outFile = join(outDir, `${year}.json`)
  writeFileSync(outFile, JSON.stringify(data, null, 2), "utf-8")
  console.log(`${year} → ${outFile} (${data.entries.length} entries)`)
}

console.log("\nDone!")
