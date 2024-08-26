import { useEffect, useRef } from 'react'

export default function ProgressRing (props) {
  const { size = 40, progress = 0, lineWidth = 5 } = props
  const canvasEl = useRef()

  useEffect(() => {
    setTimeout(() => {
      const context = canvasEl.current.getContext('2d')
      const x = size / 2
      const y = size / 2
      const r = size / 2 - lineWidth / 2

      context.clearRect(0, 0, size, size)

      // background
      context.beginPath()
      context.arc(x, y, r, 0, Math.PI * 2)
      context.strokeStyle = '#dee7d5' // Background color
      context.lineWidth = lineWidth
      context.stroke()

      // ring
      context.beginPath()
      context.arc(x, y, r, -Math.PI / 2, Math.PI * 2 * progress - Math.PI / 2)
      context.strokeStyle = '#58AC00' // Progress color
      context.lineWidth = lineWidth
      context.stroke()
    })
  }, [size, progress, lineWidth])
  
  return <canvas width={size} height={size} ref={canvasEl} />
}
