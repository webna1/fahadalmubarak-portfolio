import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return
    document.body.classList.add('cursor-on')

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = innerWidth / 2, my = innerHeight / 2
    let rx = mx, ry = my
    let raf

    const onMove = e => {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
    }
    const loop = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    loop()

    const HOT = 'a,button,[data-hot],.chip,.sw,.stat'
    const addHot = e => { if (e.target.closest(HOT)) ring.classList.add('hot') }
    const rmHot = e => { if (e.target.closest(HOT)) ring.classList.remove('hot') }
    const onDown = () => ring.classList.add('hot')
    const onUp = () => { if (!document.querySelector(':hover')?.closest(HOT)) ring.classList.remove('hot') }

    addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', addHot)
    document.addEventListener('mouseout', rmHot)
    addEventListener('mousedown', onDown)
    addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', addHot)
      document.removeEventListener('mouseout', rmHot)
      removeEventListener('mousedown', onDown)
      removeEventListener('mouseup', onUp)
      document.body.classList.remove('cursor-on')
    }
  }, [])

  return (
    <>
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-dot" ref={dotRef} />
    </>
  )
}
