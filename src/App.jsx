import { useState, useEffect } from 'react'
import { chapters } from './content/chapters'
import Landing from './components/Landing'
import CoursePage from './components/CoursePage'

const makeProgress = (saved = {}) =>
  Object.fromEntries(
    chapters.map((_, i) => [i, saved[i] || { learnDone: false, verifyScore: null, actDone: false }])
  )

export default function App() {
  const [view, setView] = useState('landing')
  const [currentChapter, setCurrentChapter] = useState(0)
  const [currentTab, setCurrentTab] = useState('learn')
  const [progress, setProgress] = useState(() => {
    try {
      return makeProgress(JSON.parse(localStorage.getItem('cc_progress') || '{}'))
    } catch {
      return makeProgress()
    }
  })

  useEffect(() => {
    localStorage.setItem('cc_progress', JSON.stringify(progress))
  }, [progress])

  const updateProgress = (chapterId, updates) =>
    setProgress(prev => ({ ...prev, [chapterId]: { ...prev[chapterId], ...updates } }))

  const isComplete = (i) => {
    const p = progress[i]
    return p.learnDone && p.verifyScore !== null && p.actDone
  }

  const isUnlocked = () => true

  const getPercent = () => {
    const done = chapters.filter((_, i) => isComplete(i)).length
    return Math.round((done / chapters.length) * 100)
  }

  const goToChapter = (i) => {
    if (!isUnlocked(i)) return
    setCurrentChapter(i)
    setCurrentTab('learn')
  }

  if (view === 'landing') {
    return <Landing onStart={() => setView('course')} />
  }

  return (
    <CoursePage
      currentChapter={currentChapter}
      currentTab={currentTab}
      progress={progress}
      percent={getPercent()}
      isComplete={isComplete}
      isUnlocked={isUnlocked}
      onChapterSelect={goToChapter}
      onTabChange={setCurrentTab}
      onProgressUpdate={updateProgress}
      onBack={() => setView('landing')}
    />
  )
}
