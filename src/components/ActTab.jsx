export default function ActTab({ chapter, isCompleted, onComplete }) {
  const { act } = chapter

  return (
    <div className="max-w-2xl">

      <h2 className="text-xl font-black text-white mb-1">{act.title}</h2>
      <p className="text-white/25 text-sm font-mono mb-4">⏱ {act.duration}</p>
      <p className="text-white/60 mb-8 leading-relaxed text-[15px]">{act.objective}</p>

      <div className="flex flex-col gap-5 mb-8">
        {act.steps.map(step => (
          <div key={step.step} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-pink-500/15 border border-pink-500/30 flex items-center justify-center flex-shrink-0 text-pink-400 font-bold text-sm mt-0.5">
              {step.step}
            </div>
            <div className="flex-1">
              <p className="text-white/75 text-[15px] leading-relaxed">{step.instruction}</p>
              {step.tip && (
                <p className="text-white/30 text-sm mt-2 italic">💡 {step.tip}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 bg-green-500/[0.07] border border-green-500/20 rounded-xl mb-8">
        <p className="text-green-400 font-bold mb-2 text-sm">✓ Comment savoir que tu as réussi</p>
        <p className="text-white/50 text-sm leading-relaxed">{act.validation}</p>
      </div>

      {isCompleted ? (
        <div className="flex items-center gap-2 text-green-400 font-semibold">
          <span>✓</span><span>Exercice complété</span>
        </div>
      ) : (
        <button
          onClick={onComplete}
          className="w-full py-4 bg-white text-[#08081a] font-bold rounded-xl hover:bg-purple-50 transition-all"
        >
          J'ai réalisé cet exercice ✓
        </button>
      )}

    </div>
  )
}
