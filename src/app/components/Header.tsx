import { Phone, Mail, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>8 800 550 03 99</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@lawyer.ru</span>
            </div>
          </div>
          <Button size="sm" className="bg-red-500 hover:bg-red-600 hidden md:inline-flex">
            Заказать звонок
          </Button>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold">ЛОГОТИП</div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#services" className="hover:text-red-500 transition-colors">О нас</a>
            <a href="#practice" className="hover:text-red-500 transition-colors">Услуги</a>
            <a href="#clients" className="hover:text-red-500 transition-colors">Клиенты</a>
            <a href="#reviews" className="hover:text-red-500 transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Контакты</a>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t flex flex-col gap-4">
            <a href="#services" className="hover:text-red-500 transition-colors">О нас</a>
            <a href="#practice" className="hover:text-red-500 transition-colors">Услуги</a>
            <a href="#clients" className="hover:text-red-500 transition-colors">Клиенты</a>
            <a href="#reviews" className="hover:text-red-500 transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Контакты</a>
          </nav>
        )}
      </div>
    </header>
  );
}
