import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">О компании</h3>
            <p className="text-sm text-gray-400">
              Помогаем предпринимателям усиливать управление и достигать устойчивого роста бизнеса.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">О нас</a></li>
              <li><a href="#practice" className="hover:text-white">Услуги</a></li>
              <li><a href="#clients" className="hover:text-white">Прайс-лист</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Чапанов Ислам Крымсолтанович</li>
              <li>ОГРНИП: 322057100058991</li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:89887935052" className="hover:text-white">89887935052</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:internal.auditorI@yandex.ru" className="hover:text-white">internal.auditorI@yandex.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Юридический адрес: 367015, Республика Дагестан, город Махачкала, поселок городского типа Кяхулай</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Форма обратной связи: по электронной почте</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Консалтинговая компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
