import { courseTitle, courseSubtitle, courseMeta } from '../content/chapters'

const themeBlocks = [
  { emoji: '🧠', title: 'Comprendre Claude Code', desc: 'Agentique, boucle, modes' },
  { emoji: '⚙️', title: 'Installation & config',  desc: 'CLAUDE.md, permissions, plans' },
  { emoji: '🧩', title: 'Skills, agents & MCP',   desc: 'Réutilisabilité et délégation' },
  { emoji: '📐', title: 'Maîtriser le contexte',  desc: 'Tokens, mémoire, Prompt Discovery' },
  { emoji: '🔄', title: 'Workflows avancés',      desc: 'EPCT, Plan mode, multi-agents' },
  { emoji: '🚀', title: 'Usage professionnel',    desc: 'Greenfield, debug, TMUX' },
]

export default function Landing({ onStart }) {
  return (
    <div className="min-h-screen bg-[#08081a] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(226,120,231,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-2xl w-full relative z-10 text-center py-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-white/50 text-xs font-medium tracking-wide">Cours interactif · Outils IA</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.95] mb-4 font-display">
          {courseTitle}
        </h1>
        <p className="text-lg text-white/40 leading-relaxed max-w-lg mx-auto mb-12">
          {courseSubtitle}
        </p>

        {/* Theme grid */}
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-10">
          {themeBlocks.map((b, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/[0.04] rounded-xl px-4 py-4 text-left">
              <p className="text-2xl mb-2">{b.emoji}</p>
              <p className="text-white/80 text-sm font-semibold leading-tight">{b.title}</p>
              <p className="text-white/25 text-[11px] mt-1 font-mono">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-center gap-6 text-white/20 text-xs font-mono mb-10">
          <span>{courseMeta.chapters} chapitres</span>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <span>{courseMeta.duration}</span>
          <span className="w-1 h-1 rounded-full bg-white/10" />
          <span>{courseMeta.level}</span>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#08081a] font-bold text-base rounded-xl shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-purple-50"
        >
          Commencer le cours
          <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </button>

      </div>
    </div>
  )
}
