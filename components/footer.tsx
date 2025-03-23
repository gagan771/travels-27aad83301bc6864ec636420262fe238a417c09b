"use client"

import type React from "react"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function Footer() {
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-foreground font-medium text-xl tracking-tighter inline-block mb-4">
              Akihi<span className="text-primary">Tales</span>
            </Link>
            <p className="text-muted-foreground text-xs mb-4">Premium island tours and adventures.</p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-muted" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-muted" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-muted" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider mb-3">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Tours
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-muted-foreground hover:text-foreground transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider mb-3">Legal</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider mb-3">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="mt-2">
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" required className="h-8 text-xs rounded-full" />
                <Button type="submit" className="h-8 text-xs rounded-full px-3">
                  Subscribe
                </Button>
              </div>
            </form>
            <p className="text-muted-foreground text-xs mt-2">© {new Date().getFullYear()} Akihi Tales</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

