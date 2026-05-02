"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import { cn } from "@/lib/utils"

interface SquaresBackgroundProps {
  /** Tamaño de cada cuadrado en px. */
  size?: number
  /** Separación entre cuadrados en px. */
  gap?: number
  /** Radio del borde (clase Tailwind). */
  radius?: string
  /** Radio del spotlight que sigue al cursor (px). */
  spotlight?: number
  /** Color del spotlight (hex/rgb). */
  spotlightColor?: string
  className?: string
}

/**
 * Background de cuadrados con efecto "spotlight" estilo MagicCard:
 * los cuadrados cercanos al cursor se iluminan siguiendo el mouse.
 */
export function SquaresBackground({
  size = 110,
  gap = 8,
  radius = "rounded-xl",
  spotlight = 320,
  spotlightColor = "#ffffff",
  className,
}: SquaresBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
    const handleLeave = () => {
      mouseX.set(-9999)
      mouseY.set(-9999)
    }
    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseleave", handleLeave)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseleave", handleLeave)
    }
  }, [mouseX, mouseY])

  const cols = 20
  const rows = 14
  const cells = Array.from({ length: cols * rows })

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, ${size}px)`,
    gridTemplateRows: `repeat(${rows}, ${size}px)`,
    gap: `${gap}px`,
    width: cols * size + (cols - 1) * gap,
    height: rows * size + (rows - 1) * gap,
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }

  // Mask radial centrada en el cursor para revelar la capa "iluminada".
  const maskImage = useMotionTemplate`radial-gradient(${spotlight}px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)`

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden bg-background",
        className,
      )}
    >
      {/* Capa base: cuadrados tenues */}
      <div className="grid" style={gridStyle}>
        {cells.map((_, i) => (
          <div
            key={i}
            className={cn("border border-white/10 bg-white/[0.04]", radius)}
          />
        ))}
      </div>

      {/* Capa iluminada: cuadrados brillantes, revelada por la mask que sigue al cursor */}
      <motion.div
        className="grid"
        style={{
          ...gridStyle,
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      >
        {cells.map((_, i) => (
          <div
            key={i}
            className={cn(
              "border bg-white/20",
              radius,
            )}
            style={{
              borderColor: spotlightColor,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
