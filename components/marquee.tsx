"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const getAnimationDuration = () => {
    switch (speed) {
      case "slow":
        return "40s"
      case "fast":
        return "15s"
      case "normal":
      default:
        return "25s"
    }
  }

  return (
    <div className={cn("flex overflow-hidden", pauseOnHover && "hover:[animation-play-state:paused]", className)}>
      <div
        className="flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee"
        style={{
          animationDuration: getAnimationDuration(),
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

