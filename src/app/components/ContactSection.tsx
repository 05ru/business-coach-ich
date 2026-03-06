import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Контакты
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-gray-100 rounded-lg h-64 mb-6 flex items-center justify-center text-gray-500">
              <MapPin className="w-12 h-12" />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Тверская, д. 1, офис 100</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-gray-600">8 800 550 03 99</p>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@lawyer.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                  <p className="text-gray-600">Сб-Вс: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <Input type="tel" placeholder="Телефон" />
              </div>
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <Textarea
                  placeholder="Ваше сообщение"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-red-500 hover:bg-red-600">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
