import { chapters } from '../content/chapters'

export default function Sidebar({ currentChapter, currentTab, progress, percent, isComplete, isUnlocked, onChapterSelect, onTabChange, onBack }) {
  return (
    <div className="w-64 min-h-screen bg-[#050514] border-r border-white/[0.06] flex flex-col flex-shrink-0 sticky top-0 h-screen overflow-y-auto">

      <div className="p-4 border-b border-white/[0.06]">
        <button onClick={onBack} className="text-white/30 text-xs hover:text-white/60 transition-colors mb-3 block">
          ← Accueil
        </button>
        <h2 className="text-white font-bold text-sm leading-tight mb-3">Maîtriser Claude Code</h2>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-700"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-white/20 text-[10px] font-mono">{percent}%</span>
        </div>
      </div>

      <div className="flex-1 p-3 flex flex-col gap-1">
        {chapters.map((chapter, i) => {
          const isActive = currentChapter === i
          const complete = isComplete(i)
          const unlocked = isUnlocked(i)
          const p        = progress[i]

          return (
            <div key={i}>
              <button
                onClick={() => onChapterSelect(i)}
                disabled={!unlocked}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all ${
                  isActive   ? 'bg-white/[0.07] text-white' :
                  unlocked   ? 'text-white/50 hover:text-white/80 hover:bg-white/[0.03]' :
                               'text-white/20 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm w-4 flex-shrink-0">
                    {complete ? '✓' : unlocked ? chapter.emoji : '🔒'}
                  </span>
                  <span className="text-xs font-semibold leading-tight">{chapter.title}</span>
                </div>
              </button>

              {isActive && (
                <div className="ml-8 mt-1 mb-1 flex flex-col gap-0.5">
                  {[
                    { id: 'learn',  label: 'Apprendre', done: p.learnDone },
                    { id: 'verify', label: 'Vérifier',  done: p.verifyScore !== null, score: p.verifyScore },
                    { id: 'act',    label: 'Agir',       done: p.actDone },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => onTabChange(tab.id)}
                      className={`text-left px-2 py-1 rounded text-[11px] transition-colors ${
                        currentTab === tab.id ? 'text-pink-400 font-semibold' :
                        tab.done              ? 'text-green-400' :
                                               'text-white/30 hover:text-white/60'
                      }`}
                    >
                      {tab.done ? '✓ ' : '○ '}{tab.label}
                      {tab.score !== null && tab.score !== undefined && (
                        <span className="ml-1 text-white/20">{tab.score}/5</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
