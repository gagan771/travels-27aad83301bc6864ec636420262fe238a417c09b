"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronDown, Map, Mountain, Home, Compass, Tent, Image } from "lucide-react"

type NavItem = {
  title: string
  href: string
  description?: string
  icon?: React.ReactNode
  children?: NavItem[]
}

// NAVIGATION ITEMS - EDIT HERE
const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-4 w-4 mr-2" />,
    description: "Return to our homepage",
  },
  {
    title: "Packages", // Changed from "Rishikesh" to "Packages"
    href: "/rishikesh",
    icon: <Compass className="h-4 w-4 mr-2" />,
    description: "Explore our travel packages",
    children: [
      {
        title: "Package 1", // Changed from "Spiritual Tours"
        href: "/rishikesh/spiritual-tours",
        description: "Our most popular adventure package",
      },
      {
        title: "Package 2", // Changed from "Yoga Retreats"
        href: "/rishikesh/yoga-retreats",
        description: "Perfect for family vacations",
      },
      {
        title: "Package 3", // Changed from "Ganga Aarti"
        href: "/rishikesh/ganga-aarti",
        description: "Luxury travel experience",
      },
      {
        title: "Package 4", // Added new package
        href: "/rishikesh/package-4",
        description: "Budget-friendly travel options",
      },
    ],
  },
  {
    title: "All Uttara",
    href: "/uttarakhand",
    icon: <Map className="h-4 w-4 mr-2" />,
    description: "Discover the beauty of Uttarakhand",
    children: [
      {
        title: "Nainital",
        href: "/uttarakhand/nainital",
        description: "Visit the city of lakes",
      },
      {
        title: "Mussoorie",
        href: "/uttarakhand/mussoorie",
        description: "Explore the queen of hills",
      },
      {
        title: "Auli",
        href: "/uttarakhand/auli",
        description: "Ski in the Himalayan slopes",
      },
      {
        title: "Corbett National Park",
        href: "/uttarakhand/corbett",
        description: "Wildlife safari in India's oldest national park",
      },
    ],
  },
  {
    title: "Adventure",
    href: "/adventure",
    icon: <Mountain className="h-4 w-4 mr-2" />,
    description: "Thrilling adventures in Rishikesh",
    children: [
      {
        title: "River Rafting",
        href: "/adventure/rafting",
        description: "Experience white water rafting on the Ganges",
      },
      {
        title: "Bungee Jumping",
        href: "/adventure/bungee-jumping",
        description: "Take a leap of faith from 83 meters",
      },
      {
        title: "Cliff Jumping",
        href: "/adventure/cliff-jumping",
        description: "Jump into the crystal clear waters",
      },
      {
        title: "Trekking",
        href: "/adventure/trekking",
        description: "Trek through breathtaking Himalayan trails",
      },
    ],
  },
  {
    title: "4 Dham",
    href: "/char-dham",
    icon: <Tent className="h-4 w-4 mr-2" />,
    description: "The sacred pilgrimage of Char Dham",
    children: [
      {
        title: "Yamunotri",
        href: "/char-dham/yamunotri",
        description: "The source of River Yamuna",
      },
      {
        title: "Gangotri",
        href: "/char-dham/gangotri",
        description: "The origin of the holy Ganges",
      },
      {
        title: "Kedarnath",
        href: "/char-dham/kedarnath",
        description: "The abode of Lord Shiva",
      },
      {
        title: "Badrinath",
        href: "/char-dham/badrinath",
        description: "The sacred temple of Lord Vishnu",
      },
    ],
  },
  // Added Gallery option
  {
    title: "Gallery",
    href: "/gallery",
    icon: <Image className="h-4 w-4 mr-2" />,
    description: "View our travel photos and videos",
  },
]

export function MainNav() {
  return (
    <nav className="flex gap-4 items-center">
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </nav>
  )
}

function NavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link
        href={item.href}
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 hover:bg-primary/10",
          item.children ? "cursor-default" : "",
        )}
      >
        {item.icon}
        {item.title}
        {item.children && (
          <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
        )}
      </Link>
      {item.children && isOpen && (
        <div className="absolute top-full left-0 mt-1 w-[300px] rounded-md border bg-popover shadow-lg backdrop-blur-sm z-50 overflow-hidden">
          <div className="p-2">
            {item.children.map((child, childIndex) => (
              <Link
                key={childIndex}
                href={child.href}
                className="block p-3 rounded-md hover:bg-accent transition-colors"
              >
                <div className="text-sm font-medium mb-1">{child.title}</div>
                {child.description && <div className="text-xs text-muted-foreground">{child.description}</div>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

