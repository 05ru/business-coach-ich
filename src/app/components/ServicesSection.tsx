import { ImageWithFallback } from './figma/ImageWithFallback';
import { LineChart, BarChart3, Target, TrendingUp, Wallet, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Финансовом моделировании',
    description: 'Создание точных финансовых моделей для управленческих решений',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: LineChart
  },
  {
    title: 'Анализе рынка и конкурентов',
    description: 'Оценка ниши и конкурентной среды для усиления позиций бизнеса',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: BarChart3
  },
  {
    title: 'Разработке стратегии развития',
    description: 'Построение реалистичной стратегии роста с четкими этапами',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Target
  },
  {
    title: 'Повышении рентабельности бизнеса',
    description: 'Поиск точек роста маржинальности и повышение эффективности процессов',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: TrendingUp
  },
  {
    title: 'Оптимизации расходов',
    description: 'Снижение издержек без потери качества ключевых бизнес-процессов',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Wallet
  },
  {
    title: 'Запуске новых проектов',
    description: 'Подготовка и сопровождение запуска проектов от идеи до реализации',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    icon: Rocket
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Обо мне
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Я — практикующий экономист и бизнес-коуч с опытом работы в финансовом анализе, стратегическом планировании и сопровождении малого и среднего бизнеса. Специализируюсь на:
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
