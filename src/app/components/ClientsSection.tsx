import {
  Briefcase,
  ChartNoAxesColumn,
  Compass,
  HandCoins,
  LineChart,
  Users,
  type LucideIcon,
} from 'lucide-react';

type PriceItem = {
  icon: LucideIcon;
  title: string;
  price: string;
  note?: string;
};

const prices: PriceItem[] = [
  {
    icon: Users,
    title: 'Индивидуальная консультация (60 минут)',
    price: 'от 50 000 – 80 000 ₽',
  },
  {
    icon: HandCoins,
    title: 'Бизнес-коучинг (пакет 4 сессии)',
    price: 'от 200 000 – 300 000 ₽',
  },
  {
    icon: ChartNoAxesColumn,
    title: 'Финансовый анализ бизнеса',
    price: 'от 280 000 ₽',
    note: '(в зависимости от масштаба компании)',
  },
  {
    icon: LineChart,
    title: 'Анализ рынка и конкурентов',
    price: 'от 350 000 ₽',
  },
  {
    icon: Compass,
    title: 'Стратегическая сессия (3–4 часа)',
    price: 'от 400 000 ₽',
  },
  {
    icon: Briefcase,
    title: 'Сопровождение бизнеса (месяц)',
    price: 'от 600 000 ₽',
  },
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Прайс-лист</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Актуальные услуги для развития и сопровождения бизнеса
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {prices.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="h-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-xl font-bold text-gray-900">{item.price}</p>
                {item.note && <p className="mt-2 text-sm text-gray-500">{item.note}</p>}
              </article>
            );
          })}
        </div>

        <p className="text-center text-gray-600 mt-10">
          Стоимость зависит от сложности проекта и объёма данных.
        </p>
      </div>
    </section>
  );
}
