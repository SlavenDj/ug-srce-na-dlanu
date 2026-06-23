import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { loadArchive, type YearData } from "../data/archive"
import ArchiveEntryCard from "../components/ArchiveEntryCard"
import { ArrowLeft } from "lucide-react"

const yearColors: Record<number, string> = {
  2014: "#8e44ad", 2015: "#8e44ad", 2016: "#2980b9", 2017: "#27ae60",
  2018: "#e67e22", 2019: "#c0392b", 2020: "#2c3e50", 2021: "#16a085",
  2022: "#d35400", 2023: "#c0392b", 2024: "#2980b9",
}

export default function ArchivePage() {
  const { t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const [entries, setEntries] = useState<YearData[]>([])
  const [loading, setLoading] = useState(true)
  const archive = t.archive

  const selectedYear = searchParams.get("year")
  const selectedEntry = entries.find((e) => String(e.year) === selectedYear)

  useEffect(() => {
    loadArchive().then((data) => {
      setEntries(data)
      setLoading(false)
    })
  }, [])

  const handleYearClick = (year: number) => {
    setSearchParams({ year: String(year) })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBack = () => {
    setSearchParams({})
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl text-gray-400 animate-pulse">{t.nav.actions}</div>
      </div>
    )
  }

  if (selectedEntry) {
    const color = yearColors[selectedEntry.year] || "#2c3e50"
    return (
      <>
        <section
          className="pt-20 pb-12 text-white text-center"
          style={{ background: `linear-gradient(135deg, ${color}, #1a252f)` }}
        >
          <div className="mx-auto max-w-7xl px-6">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white mb-5 transition-colors cursor-pointer bg-transparent border-none text-[0.85rem]"
            >
              <ArrowLeft size={16} />
              {archive.back}
            </button>
            <h1 className="text-[2.2rem] mb-2">{selectedEntry.year}</h1>
            <p className="text-white/60 text-[0.95rem] max-w-2xl mx-auto">{selectedEntry.title}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {selectedEntry.entries.map((entry, i) => (
                <ArchiveEntryCard key={i} entry={entry} index={i} color={color} />
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="bg-gradient-to-br from-secondary dark:from-[#1e293b] to-[#1a252f] text-white pt-20 pb-12 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-[2.5rem] mb-3">{archive.title}</h1>
          <p className="text-white/70 text-[1.05rem] max-w-2xl mx-auto">
            {archive.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
            {entries.map((entry) => {
              const color = yearColors[entry.year] || "#2c3e50"
              const count = entry.entries.length
              return (
                <button
                  key={entry.year}
                  onClick={() => handleYearClick(entry.year)}
                  className="group cursor-pointer text-center bg-white dark:bg-[#171923] rounded-card p-5 shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg border-none w-full"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-[1.1rem] font-bold mx-auto mb-2 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    {entry.year}
                  </div>
                  <p className="text-[0.8rem] text-gray-400 dark:text-[#9ca3af] font-medium">
                    {count > 0
                      ? `${count} ${archive.actions}`
                      : archive.browse}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
