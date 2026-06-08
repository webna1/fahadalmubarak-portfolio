import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            e.target.classList.remove('hidden-anim')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach(el => {
      if (!el.classList.contains('in')) {
        el.classList.add('hidden-anim')
        io.observe(el)
      }
    })

    return () => io.disconnect()
  }, [])
}
