import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <a className="brand" href="#top" data-hot>
        <span className="mono-badge">FA</span>
        Fahad Al-Mubarak
      </a>
      <div className={`nav-links${open ? ' open' : ''}`} id="navLinks">
        <a href="#work" data-hot onClick={closeMenu}>Work</a>
        <a href="#about" data-hot onClick={closeMenu}>About</a>
        <a href="#skills" data-hot onClick={closeMenu}>Skills</a>
        <a href="#contact" data-hot onClick={closeMenu}>Contact</a>
      </div>
      <button className="nav-toggle" onClick={() => setOpen(o => !o)} data-hot>
        MENU
      </button>
    </nav>
  )
}
