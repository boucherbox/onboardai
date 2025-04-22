"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export default function TurtleMascot() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current

    if (!container || !image) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      // Subtle movement effect
      image.style.transform = `translate(${x * 10}px, ${y * 10}px)`
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full bg-sage-light dark:bg-sage/20"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={imageRef} className="transition-transform duration-200 ease-out">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Wise Turtle Mascot"
            width={300}
            height={300}
            className="drop-shadow-lg"
            priority
          />
        </div>
      </div>
      <div className="absolute bottom-6 right-6 bg-cream dark:bg-brown-medium rounded-full p-2 shadow-lg">
        <div className="h-4 w-4 rounded-full bg-sage animate-pulse" />
      </div>
    </div>
  )
}
