import { useState, useEffect } from 'react'

export function useScroll(threshold: number = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}