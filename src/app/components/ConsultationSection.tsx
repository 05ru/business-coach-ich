import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ShieldCheck,
  Sheet,
  Handshake,
  TrendingUp
} from 'lucide-react';

const benefits = [
  {
    title: 'Практический опыт в реальном бизнесе',
    icon: BriefcaseBusiness
  },
  {
    title: 'Работаю с цифрами, а не с абстрактной мотивацией',
    icon: ChartNoAxesCombined
  },
  {
    title: 'Конкретные инструменты и таблицы',
    icon: Sheet
  },
  {
    title: 'Поддержка после консультации',
    icon: Handshake
  },
  {
    title: 'Конфиденциальность',
    icon: ShieldCheck
  },
  {
    title: 'Фокус на росте прибыли и эффективности',
    icon: TrendingUp
  }
];

export function ConsultationSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Преимущества работы со мной
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Помогаю собственникам принимать решения на основе фактов, структуры и понятных шагов.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/15"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-lg bg-white/15 p-2">
                      <Icon className="h-5 w-5 text-blue-200" aria-hidden="true" />
                    </div>
                    <p className="text-base leading-6 text-white/95">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
