import { useState } from "react"
import { ExternalLink } from "lucide-react"
import type { YearEntry } from "../data/archive"
import { Card, CardContent } from "./ui/card"
import {
  DialogRoot,
  DialogPopup,
  DialogClose,
  DialogTitle,
} from "./ui/dialog"

interface Props {
  entry: YearEntry
  index: number
  color: string
}

export default function ArchiveEntryCard({ entry, index, color }: Props) {
  const [modalOpen, setModalOpen] = useState(false)
  const hasAlt = entry.paragraphsAlt && entry.paragraphsAlt.length > 0
  const charCount = entry.paragraphs.join(" ").length + (entry.paragraphsAlt || []).join(" ").length
  const isShort = charCount <= 300

  return (
    <DialogRoot open={modalOpen} onOpenChange={setModalOpen}>
      <div onClick={() => setModalOpen(true)} className="h-full">
        <Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-card-lg group">
          <CardContent className="h-full p-0">
            <div className="border-l-4 p-5 h-full flex flex-col" style={{ borderLeftColor: color }}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div
                    className="hidden sm:flex w-9 h-9 rounded-xl items-center justify-center text-white text-[0.8rem] font-bold shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] font-bold text-secondary leading-[1.4]">
                      {entry.title}
                    </h3>
                    {entry.titleAlt && (
                      <p className="text-[0.85rem] text-gray-400 dark:text-[#9ca3af] mt-0.5">
                        {entry.titleAlt}
                      </p>
                    )}
                  </div>
                </div>

                <div className="shrink-0 p-1.5 rounded-lg text-gray-300 transition-colors duration-300 group-hover:text-gray-500">
                  <ExternalLink size={18} />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-2">
                {entry.date && (
                  <span
                    className="inline-flex items-center text-[0.75rem] font-semibold text-white px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: color }}
                  >
                    {entry.date}
                  </span>
                )}
                {entry.description && (
                  <p className="text-[0.85rem] text-gray-500 leading-[1.5] flex-1 min-w-0">
                    {entry.description}
                  </p>
                )}
              </div>

              {isShort && (
                <div className="mt-3 space-y-2">
                  {entry.paragraphs.map((p, j) => (
                    <p key={j} className="text-[0.9rem] text-gray-700 dark:text-[#d1d5db] leading-[1.7]">
                      {cleanParagraph(p)}
                    </p>
                  ))}
                </div>
              )}

              <div className="flex-1" />
            </div>
          </CardContent>
        </Card>
      </div>

      <DialogPopup>
        <DialogClose />
        {entry.date && (
          <span
            className="inline-flex items-center text-[0.75rem] font-semibold text-white px-2.5 py-1 rounded-md mb-4"
            style={{ backgroundColor: color }}
          >
            {entry.date}
          </span>
        )}
        <DialogTitle className="mb-1">{entry.title}</DialogTitle>
        {entry.titleAlt && (
          <p className="text-[0.9rem] text-gray-400 dark:text-[#9ca3af] mb-5">{entry.titleAlt}</p>
        )}
        <div className="space-y-4">
          <div className="space-y-3">
            {entry.paragraphs.map((p, j) => (
              <p key={j} className="text-[0.95rem] text-gray-700 dark:text-[#d1d5db] leading-[1.8]">
                {cleanParagraph(p)}
              </p>
            ))}
          </div>

          {hasAlt && (
            <div className="bg-gray-50 dark:bg-[#171923] rounded-xl p-5 border border-gray-100 dark:border-[#2a2d3a]">
              <div className="space-y-3">
                {entry.paragraphsAlt!.map((p, j) => (
                  <p key={j} className="text-[0.95rem] text-gray-500 leading-[1.8]">
                    {cleanParagraph(p)}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogPopup>
    </DialogRoot>
  )
}

function cleanParagraph(text: string): string {
  return text.replace(/\s+/g, " ").trim()
}
