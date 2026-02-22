import { useMemo } from 'react'
import data from './assets/fragments.json'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function SidebarScroller({ side }) {
  const text = useMemo(() => {
    const shuffled = shuffle(data.fragments)
    const joined = shuffled.join('   \u2014   ')
    return joined + '   \u2014   ' + joined // doubled for seamless loop
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`sidebar sidebar--${side}`}>
      <span className="sidebar__text">{text}</span>
    </div>
  )
}
