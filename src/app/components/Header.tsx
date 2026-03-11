import { Phone, Mail, Menu } from 'lucide-react';
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
              <span>89887935052</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>internal.auditorI@yandex.ru</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold">ИП Чапанов Ислам</div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#services" className="hover:text-red-500 transition-colors">О нас</a>
            <a href="#practice" className="hover:text-red-500 transition-colors">Услуги</a>
            <a href="#clients" className="hover:text-red-500 transition-colors">Прайс-лист</a>
            <a href="#reviews" className="hover:text-red-500 transition-colors">Отзывы</a>
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
            <a href="#clients" className="hover:text-red-500 transition-colors">Прайс-лист</a>
            <a href="#reviews" className="hover:text-red-500 transition-colors">Отзывы</a>
          </nav>
        )}
      </div>
    </header>
  );
}
