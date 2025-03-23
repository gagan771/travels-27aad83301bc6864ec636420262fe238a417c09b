"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-gradient-to-b from-background/80 to-transparent",
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="Akihi Tales Logo"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <span className="text-foreground font-bold text-xl tracking-tight hover:text-primary transition-colors">
                Ak
              </span>
            </Link>
          </div>

          <div className="hidden md:block mx-4 flex-1 flex justify-center">
            <MainNav />
          </div>

          <div className="flex items-center gap-4">
            {/* Theme toggle button removed as requested */}
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-40 transform transition duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="bg-background/95 backdrop-blur-md border-t h-full flex flex-col p-6">
          <div className="flex flex-col space-y-6">
            {/* 
            MOBILE MENU ITEMS
            Edit these items to match your updated navigation
          */}
            {[
              { name: "Home", href: "/" },
              { name: "Packages", href: "/rishikesh" },
              { name: "All Uttarakhand", href: "/uttarakhand" },
              { name: "Adventure", href: "/adventure" },
              { name: "Char Dham", href: "/char-dham" },
              { name: "Gallery", href: "/gallery" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground text-base font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

