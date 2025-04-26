"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { type ReactNode, useState, useRef, useEffect } from "react"

interface AnimatedBorderCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  highlightColor?: string
  highlightPosition?: "all" | "bottom" | "top" | "left" | "right"
}

export function AnimatedBorderCard({
  children,
  className,
  style,
  highlightColor = "#6aa84f", // Yellow/gold color to match the image
  highlightPosition = "all",
}: AnimatedBorderCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    // Restart animations periodically
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1)
    }, 20000) // Longer interval for slower animations

    return () => {
      window.removeEventListener("resize", updateDimensions)
      clearInterval(interval)
    }
  }, [])

  // Create the SVG paths for different border positions
  const getPath = () => {
    switch (highlightPosition) {
      case "bottom":
        return `M 0,${dimensions.height} L ${dimensions.width},${dimensions.height}`
      case "top":
        return `M 0,0 L ${dimensions.width},0`
      case "left":
        return `M 0,0 L 0,${dimensions.height}`
      case "right":
        return `M ${dimensions.width},0 L ${dimensions.width},${dimensions.height}`
      case "all":
      default:
        return `
          M 0,0
          L ${dimensions.width},0
          L ${dimensions.width},${dimensions.height}
          L 0,${dimensions.height}
          L 0,0
        `
    }
  }

  return (
    <div ref={containerRef} className={cn("relative rounded-lg", className)} style={style}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
          >
            {/* Animated light beam */}
            <motion.path
              key={`beam-${animationKey}`}
              d={getPath()}
              fill="none"
              stroke={highlightColor}
              strokeWidth={2} // Thicker line to match the image
              strokeLinecap="round"
              // Much longer dash to match the image (longer beam)
              strokeDasharray="200 300"
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 15, // Much slower animation
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </svg>
        </div>
      )}

      {/* Card content */}
      <Card className="w-full h-full border-none bg-transparent shadow-none">{children}</Card>
    </div>
  )
}
