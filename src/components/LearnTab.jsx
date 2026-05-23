function Paragraph({ text }) {
  return <p className="text-white/70 leading-relaxed mb-5 text-[15px]">{text}</p>
}

function Heading({ text }) {
  return <h2 className="text-lg font-bold text-white mt-10 mb-3 border-l-2 border-pink-500/60 pl-3">{text}</h2>
}

function Callout({ variant = 'note', title, text }) {
  const s = {
    note:    { border: 'border-blue-500/30',   bg: 'bg-blue-500/[0.07]',   titleColor: 'text-blue-300' },
    key:     { border: 'border-yellow-500/30', bg: 'bg-yellow-500/[0.07]', titleColor: 'text-yellow-300' },
    warning: { border: 'border-red-500/30',    bg: 'bg-red-500/[0.07]',    titleColor: 'text-red-300' },
  }[variant] || {}

  return (
    <div className={`border-l-2 ${s.border} ${s.bg} pl-4 py-3 pr-4 rounded-r-lg my-5`}>
      {title && <p className={`${s.titleColor} font-bold text-sm mb-1.5`}>{title}</p>}
      <p className="text-white/55 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

function Comparison({ left, right }) {
  return (
    <div className="grid grid-cols-2 gap-4 my-6">
      <div className="bg-red-500/[0.07] border border-red-500/20 rounded-xl p-4">
        <p className="text-red-400 font-bold text-sm mb-2">{left.title}</p>
        <p className="text-white/55 text-sm leading-relaxed">{left.text}</p>
      </div>
      <div className="bg-green-500/[0.07] border border-green-500/20 rounded-xl p-4">
        <p className="text-green-400 font-bold text-sm mb-2">{right.title}</p>
        <p className="text-white/55 text-sm leading-relaxed">{right.text}</p>
      </div>
    </div>
  )
}

function List({ title, items }) {
  return (
    <div className="my-5">
      {title && <p className="text-white/70 font-semibold mb-3 text-sm">{title}</p>}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-white/55 text-[14px]">
            <span className="text-pink-400 flex-shrink-0 mt-0.5">◆</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Highlight({ text }) {
  return (
    <div className="my-8 border border-white/[0.08] rounded-xl p-6 bg-white/[0.02] text-center">
      <p className="text-white/70 text-base font-medium italic leading-relaxed">"{text}"</p>
    </div>
  )
}

function Code({ text }) {
  return (
    <div className="my-5 bg-black/40 border border-white/[0.08] rounded-xl p-4 overflow-x-auto">
      <pre className="text-green-300/80 text-sm font-mono leading-relaxed whitespace-pre-wrap">{text}</pre>
    </div>
  )
}

export default function LearnTab({ chapter, isCompleted, onComplete }) {
  return (
    <div className="max-w-2xl">
      {chapter.learn.map((block, i) => {
        switch (block.type) {
          case 'paragraph':   return <Paragraph  key={i} {...block} />
          case 'heading':     return <Heading    key={i} {...block} />
          case 'callout':     return <Callout    key={i} {...block} />
          case 'comparison':  return <Comparison key={i} {...block} />
          case 'list':        return <List       key={i} {...block} />
          case 'highlight':   return <Highlight  key={i} {...block} />
          case 'code':        return <Code       key={i} {...block} />
          default:            return null
        }
      })}

      <div className="mt-12 pt-6 border-t border-white/[0.06]">
        {isCompleted ? (
          <div className="flex items-center gap-2 text-green-400 font-semibold">
            <span>✓</span><span>Chapitre lu</span>
          </div>
        ) : (
          <button
            onClick={onComplete}
            className="px-8 py-4 bg-white text-[#08081a] font-bold rounded-xl hover:bg-purple-50 transition-all"
          >
            J'ai lu ce chapitre →
          </button>
        )}
      </div>
    </div>
  )
}
