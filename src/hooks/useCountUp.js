import { useEffect } from 'react'

export function useCountUp() {
  useEffect(() => {
    const cio = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          const el = e.target
          const target = +el.dataset.count
          let n = 0
          const step = () => {
            n += Math.max(1, Math.ceil(target / 22))
            if (n >= target) { el.textContent = target; return }
            el.textContent = n
            requestAnimationFrame(step)
          }
          step()
          cio.unobserve(el)
        })
      },
      { threshold: 0.6 }
    )
    document.querySelectorAll('[data-count]').forEach(el => cio.observe(el))
    return () => cio.disconnect()
  }, [])
}
