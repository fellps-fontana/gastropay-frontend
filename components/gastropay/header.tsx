'use client'

import { useState, useEffect } from 'react'
import { GastroPayIcon } from './logo'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-[#e5e7eb]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-dark">
          <GastroPayIcon className="w-12 h-10" />
          <span className="font-serif text-xl tracking-tight">GastroPay</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
            Como funciona
          </a>
          <a href="#diferenciais" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
            Diferenciais
          </a>
          <a href="#contato" className="text-foreground/80 hover:text-foreground transition-colors text-sm">
            Contato
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#contato"
          className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Quero conhecer
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t border-border ${isScrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-background'}`}>
          <div className="px-6 py-4 flex flex-col gap-4">
            <a
              href="#como-funciona"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Como funciona
            </a>
            <a
              href="#diferenciais"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Diferenciais
            </a>
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Contato
            </a>
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium text-center hover:bg-primary/90 transition-colors"
            >
              Quero conhecer
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
