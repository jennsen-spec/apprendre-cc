import { useState } from 'react'
import { chapters } from '../content/chapters'
import Sidebar from './Sidebar'
import LearnTab from './LearnTab'
import VerifyTab from './VerifyTab'
import ActTab from './ActTab'

const TAB_LABELS = {
  learn:  '📖 Apprendre',
  verify: '✓ Vérifier',
  act:    '⚡ Agir',
}

export default function CoursePage({ currentChapter, currentTab, progress, percent, isComplete, isUnlocked, onChapterSelect, onTabChange, onProgressUpdate, onBack }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const chapter = chapters[currentChapter]
  const p       = progress[currentChapter]

  const tabDone = {
    learn:  p.learnDone,
    verify: p.verifyScore !== null,
    act:    p.actDone,
  }

  const handleChapterSelect = (i) => {
    onChapterSelect(i)
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#08081a] text-white flex">

      {/* Overlay backdrop on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        currentChapter={currentChapter}
        currentTab={currentTab}
        progress={progress}
        percent={percent}
        isComplete={isComplete}
        isUnlocked={isUnlocked}
        onChapterSelect={handleChapterSelect}
        onTabChange={onTabChange}
        onBack={onBack}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 overflow-y-auto">

        {/* Mobile top bar */}
        <div className="sticky top-0 z-20 flex items-center gap-3 px-4 py-3 bg-[#08081a]/95 backdrop-blur border-b border-white/[0.06] md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Ouvrir le menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6"  x2="19" y2="6"  />
              <line x1="3" y1="12" x2="19" y2="12" />
              <line x1="3" y1="18" x2="19" y2="18" />
            </svg>
          </button>
          <span className="text-white/50 text-xs font-mono truncate">
            {chapter.emoji} {chapter.title}
          </span>
        </div>

        <div className="max-w-3xl mx-auto px-4 md:px-8 py-6 md:py-10">

          <div className="flex items-start justify-between mb-2">
            <h1 className="text-xl md:text-2xl font-black leading-tight">
              {chapter.emoji} {chapter.title}
            </h1>
            <span className="text-white/25 text-sm font-mono flex-shrink-0 ml-4 mt-1">{chapter.duration}</span>
          </div>
          <p className="text-white/20 text-xs font-mono mb-6">{chapter.section}</p>

          <div className="flex gap-2 mb-8 border-b border-white/[0.06] pb-4">
            {['learn', 'verify', 'act'].map(tab => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                  currentTab === tab
                    ? 'bg-white text-[#08081a]'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
                }`}
              >
                {tabDone[tab] && currentTab !== tab ? '✓ ' : ''}
                {TAB_LABELS[tab]}
              </button>
            ))}
          </div>

          {currentTab === 'learn' && (
            <LearnTab
              chapter={chapter}
              isCompleted={p.learnDone}
              onComplete={() => {
                onProgressUpdate(currentChapter, { learnDone: true })
                onTabChange('verify')
              }}
            />
          )}
          {currentTab === 'verify' && (
            <VerifyTab
              chapter={chapter}
              score={p.verifyScore}
              onComplete={(score) => onProgressUpdate(currentChapter, { verifyScore: score })}
              onGoToAct={() => onTabChange('act')}
            />
          )}
          {currentTab === 'act' && (
            <ActTab
              chapter={chapter}
              isCompleted={p.actDone}
              onComplete={() => {
                onProgressUpdate(currentChapter, { actDone: true })
                const next = currentChapter + 1
                if (next < chapters.length) onChapterSelect(next)
              }}
            />
          )}

        </div>
      </div>
    </div>
  )
}
