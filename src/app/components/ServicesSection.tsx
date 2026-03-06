import { ImageWithFallback } from './figma/ImageWithFallback';
import { Scale, FileText, Users } from 'lucide-react';

const services = [
  {
    title: 'Гражданское право',
    description: 'Защита ваших прав в гражданских спорах',
    image: 'https://images.unsplash.com/photo-1767189138545-63a1c029cad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc3Mjc1NzE1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Scale
  },
  {
    title: 'Корпоративное право',
    description: 'Юридическое сопровождение бизнеса',
    image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMGRlYWx8ZW58MXx8fHwxNzcyNzI2NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Users
  },
  {
    title: 'Документы',
    description: 'Составление и проверка договоров',
    image: 'https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHNpZ25pbmclMjBsZWdhbHxlbnwxfHx8fDE3NzI3NTcxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: FileText
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Представляем ваши интересы
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Профессиональная юридическая помощь в различных сферах права
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Icon className="w-8 h-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
