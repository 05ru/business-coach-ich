import {
  BarChart3,
  Briefcase,
  Compass,
  Handshake,
  Lightbulb,
  LineChart,
  Target,
  TrendingUp
} from 'lucide-react';

export function PracticeSection() {
  const services = [
    { title: 'Анализ рынка', icon: BarChart3 },
    { title: 'Финансовый анализ бизнеса', icon: Briefcase },
    { title: 'Стратегическая сессия', icon: Compass },
    { title: 'Разработка бизнес-модели', icon: Lightbulb },
    { title: 'Оптимизация процессов', icon: LineChart },
    { title: 'Постановка целей и KPI', icon: Target },
    { title: 'Масштабирование бизнеса', icon: TrendingUp },
    { title: 'Сопровождение собственника', icon: Handshake }
  ];

  return (
    <section id="practice" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Мои услуги</h2>
            <p className="text-gray-600 leading-relaxed">
              Моя цель — не просто дать рекомендации, а помочь внедрить решения, которые
              увеличивают прибыль и управляемость бизнеса.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 flex items-center gap-3"
              >
                <Icon className="h-5 w-5 text-indigo-600 shrink-0" aria-hidden="true" />
                <p className="text-sm font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
