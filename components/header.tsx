"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Landing<span className="text-purple-400">Book</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sobre
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Preço
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Início
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sobre
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Benefícios
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Depoimentos
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Preço
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
