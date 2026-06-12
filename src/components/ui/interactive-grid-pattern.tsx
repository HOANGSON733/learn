"use client"

import React, { useEffect, useRef, useState } from "react"

import { cn } from "@/src/lib/utils"

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param responsive - When true, square count is calculated from the container size.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  squares?: [number, number] // [horizontal, vertical]
  responsive?: boolean
  className?: string
  squaresClassName?: string
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  responsive = false,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [gridSize, setGridSize] = useState<[number, number]>(squares)
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)

  useEffect(() => {
    if (!responsive || !containerRef.current) return

    const element = containerRef.current

    const updateGridSize = () => {
      const { clientWidth, clientHeight } = element
      setGridSize([
        Math.max(1, Math.ceil(clientWidth / width)),
        Math.max(1, Math.ceil(clientHeight / height)),
      ])
    }

    updateGridSize()

    const observer = new ResizeObserver(updateGridSize)
    observer.observe(element)

    return () => observer.disconnect()
  }, [responsive, width, height])

  const [horizontal, vertical] = responsive ? gridSize : squares

  useEffect(() => {
    setHoveredSquare(null)
  }, [horizontal, vertical])

  const svgWidth = width * horizontal
  const svgHeight = height * vertical

  return (
    <div ref={containerRef} className="absolute inset-0">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        preserveAspectRatio="none"
        className={cn(
          "absolute inset-0 h-full w-full border border-gray-400/30",
          className
        )}
        {...props}
      >
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * width
          const y = Math.floor(index / horizontal) * height
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "stroke-gray-400/30 transition-all duration-100 ease-in-out not-[&:hover]:duration-1000",
                hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent",
                squaresClassName
              )}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          )
        })}
      </svg>
    </div>
  )
}
