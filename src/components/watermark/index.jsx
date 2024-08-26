import { useEffect, useRef, useState } from 'react'

import watermarkUrl from '@/assets/logo-community.png'

import './style.less'

export default function Watermark (props) {
  const { children, name } = props
  const containerRef = useRef()
  const canvasRef = useRef()
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const width = containerRef.current.offsetWidth
    const height = containerRef.current.offsetHeight
    setCanvasSize({ width, height })
    const ctx = canvasRef.current.getContext('2d')

    var img = new Image()
    img.onload = function() {
        let x = 0
        let y = 0

        ctx.clearRect(0, 0, width, height)
        
        while (x < width && y < height) {
          ctx.save()
          ctx.translate(x, y)
          ctx.rotate(-Math.PI / 6)

          ctx.drawImage(img, -img.width / 2, -img.height / 2, img.width / 4, img.height / 4)
          ctx.font = '48px PoetsenOne'
          ctx.fillText(name, -img.width / 2 + img.width / 4, -img.height / 2 + img.height / 8)
          x += 500
          if (x > width) {
            x = 0
            y += 300
          }
          ctx.restore()
        }
    };
    img.src = watermarkUrl
  }, [children, name])
  return (
    <div className="watermark-container" ref={containerRef}>
      <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} />
      {children}
    </div>
  )
}
