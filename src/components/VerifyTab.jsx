import { useState } from 'react'

export default function VerifyTab({ chapter, score, onComplete, onGoToAct }) {
  const questions   = chapter.verify
  const alreadyDone = score !== null

  const [answers, setAnswers] = useState({})

  const handleAnswer = (qId, optId) => {
    if (answers[qId] !== undefined || alreadyDone) return

    const newAnswers = { ...answers, [qId]: optId }
    setAnswers(newAnswers)

    if (Object.keys(newAnswers).length === questions.length) {
      const correct = questions.filter(q => newAnswers[q.id] === q.correctAnswer).length
      onComplete(correct)
    }
  }

  const allAnswered  = Object.keys(answers).length === questions.length
  const displayScore = alreadyDone ? score
    : allAnswered ? questions.filter(q => answers[q.id] === q.correctAnswer).length
    : null

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-black text-white mb-1">Vérifie tes connaissances</h2>
      <p className="text-white/30 text-sm mb-8">Clique sur une réponse — la correction s'affiche immédiatement.</p>

      {displayScore !== null && (
        <div className={`mb-6 p-4 rounded-xl border ${
          displayScore >= 4 ? 'bg-green-500/10 border-green-500/20' :
          displayScore >= 3 ? 'bg-yellow-500/10 border-yellow-500/20' :
                              'bg-red-500/10 border-red-500/20'
        }`}>
          <p className={`font-bold text-base ${
            displayScore >= 4 ? 'text-green-400' :
            displayScore >= 3 ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {displayScore >= 4 ? '✓ Excellent !' : displayScore >= 3 ? '⚡ Pas mal !' : '✗ À revoir'}
          </p>
          <p className="text-white/40 text-sm mt-1">{displayScore}/5 bonnes réponses</p>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {questions.map((q, qi) => {
          const userAnswer = answers[q.id]
          const isLocked   = userAnswer !== undefined || alreadyDone
          const wasCorrect = userAnswer === q.correctAnswer

          return (
            <div key={q.id} className="border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.01]">

              <div className="flex items-start gap-4 p-5">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                  isLocked ? (wasCorrect ? 'bg-green-500/70' : 'bg-red-500/70') : 'bg-pink-500/70'
                }`}>
                  {isLocked ? (wasCorrect ? '✓' : '✗') : qi + 1}
                </span>
                <div>
                  <p className="text-white font-semibold text-[15px] leading-snug">{q.question}</p>
                  {q.hint && <p className="text-white/25 text-sm italic mt-1">{q.hint}</p>}
                </div>
              </div>

              <div className="px-5 pb-5 flex flex-col gap-2">
                {q.options.map(opt => {
                  let cls = 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] cursor-pointer'

                  if (isLocked) {
                    if (opt.id === q.correctAnswer)
                      cls = 'border-green-500/60 bg-green-500/10 cursor-default'
                    else if (opt.id === userAnswer)
                      cls = 'border-red-500/60 bg-red-500/10 cursor-default'
                    else
                      cls = 'border-white/[0.04] bg-transparent opacity-25 cursor-default'
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleAnswer(q.id, opt.id)}
                      disabled={isLocked}
                      className={`w-full text-left p-3.5 rounded-lg border-2 transition-all text-sm ${cls}`}
                    >
                      <span className={
                        isLocked && opt.id === q.correctAnswer ? 'text-green-300 font-semibold' :
                        isLocked && opt.id === userAnswer      ? 'text-red-300' :
                                                                 'text-white/70'
                      }>
                        {opt.text}
                      </span>
                    </button>
                  )
                })}

                {isLocked && (
                  <div className="mt-3 p-3.5 bg-white/[0.03] border border-white/[0.05] rounded-lg">
                    <p className="text-white/45 text-sm leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {(allAnswered || alreadyDone) && (
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <button
            onClick={onGoToAct}
            className="px-8 py-4 bg-white text-[#08081a] font-bold rounded-xl hover:bg-purple-50 transition-all"
          >
            Passer à l'exercice →
          </button>
        </div>
      )}
    </div>
  )
}
