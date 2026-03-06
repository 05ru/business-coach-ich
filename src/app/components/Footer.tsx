export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">О компании</h3>
            <p className="text-sm text-gray-400">
              Профессиональная юридическая помощь с 2010 года
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Гражданское право</a></li>
              <li><a href="#" className="hover:text-white">Корпоративное право</a></li>
              <li><a href="#" className="hover:text-white">Семейное право</a></li>
              <li><a href="#" className="hover:text-white">Трудовое право</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">О нас</a></li>
              <li><a href="#" className="hover:text-white">Контакты</a></li>
              <li><a href="#" className="hover:text-white">Отзывы</a></li>
              <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>8 800 550 03 99</li>
              <li>info@lawyer.ru</li>
              <li>г. Москва, ул. Тверская, д. 1</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Юридическая компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
