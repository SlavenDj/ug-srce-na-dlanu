export interface YearEntry {
  title: string
  titleAlt?: string
  date?: string
  description?: string
  paragraphs: string[]
  paragraphsAlt?: string[]
}

export interface YearData {
  year: number
  title: string
  entries: YearEntry[]
}

const jsonModules = import.meta.glob("./archive/*.json", {
  import: "default",
}) as Record<string, () => Promise<YearData>>

export async function loadArchive(): Promise<YearData[]> {
  const entries: YearData[] = []

  for (const [, loader] of Object.entries(jsonModules)) {
    const data = await loader()
    entries.push(data)
  }

  entries.sort((a, b) => b.year - a.year)
  return entries
}

export async function loadArchiveByYear(year: number): Promise<YearData | undefined> {
  const all = await loadArchive()
  return all.find((e) => e.year === year)
}
