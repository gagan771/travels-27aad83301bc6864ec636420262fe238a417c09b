"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MorphingTextProps {
  words: string[]
  baseText?: string
  interval?: number
  className?: string
}

export function MorphingText({ words, baseText = "Experience", interval = 3000, className }: MorphingTextProps) {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const animationTimer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 500)
    }, interval)

    return () => clearInterval(animationTimer)
  }, [interval, words.length])

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="mr-3">{baseText}</span>
      <span
        className={cn(
          "inline-block transition-all duration-500 ease-in-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 font-semibold">
          {words[index]}
        </span>
      </span>
    </div>
  )
}

