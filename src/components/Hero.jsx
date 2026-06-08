import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  useReveal()

  useEffect(() => {
    const spans = [line1Ref.current, line2Ref.current]
    spans.forEach(s => s?.classList.add('name-hidden'))
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        spans.forEach(s => {
          s?.classList.remove('name-hidden')
          s?.classList.add('name-in')
        })
      )
    )
  }, [])

  return (
    <header className="hero" id="top">
      <div className="hero-bg">
        <div className="blob b1" />
        <div className="blob b2" />
      </div>
      <div className="wrap hero-grid">
        <span className="badge reveal">
          <span className="pulse" /> Available for projects · Summer 2026
        </span>
        <h1>
          <span className="l"><span ref={line1Ref} className="outline">FAHAD</span></span>
          <span className="l"><span ref={line2Ref} className="grad">AL-MUBARAK</span></span>
        </h1>
        <p className="hero-sub reveal" data-d="2">
          <b>Full-Stack Web Developer.</b> I build web products that look good, work fast, and ship to real users.
        </p>
        <p className="tagline reveal" data-d="3">React · Next.js · TypeScript · Supabase</p>
        <div className="cta-row reveal" data-d="4">
          <a href="#work" className="btn btn-primary" data-hot>
            See My Work <span className="arr">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost" data-hot>
            Get In Touch <span className="arr">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-foot reveal" data-d="4">
        <span>BASED IN IRAQ · BUILDING FOR THE WEB</span>
        <span className="scroll-cue">SCROLL <span className="ln" /></span>
      </div>
    </header>
  )
}
