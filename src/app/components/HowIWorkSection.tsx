import { MessageCircle, Target, FileSignature, BriefcaseBusiness, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Первичная консультация',
    description: 'Знакомство и диагностика'
  },
  {
    icon: Target,
    title: 'Определение целей',
    description: 'Фиксируем приоритеты и согласуем ожидаемый результат'
  },
  {
    icon: FileSignature,
    title: 'Подписание договора',
    description: 'Оформляем условия сотрудничества и зону ответственности'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Работа по выбранному формату',
    description: 'Проводим сессии и внедряем решения по согласованному плану'
  },
  {
    icon: BarChart3,
    title: 'Контроль результатов',
    description: 'Отслеживаем прогресс и корректируем дальнейшие шаги'
  }
];

export function HowIWorkSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Как проходит работа
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Простой и прозрачный процесс работы с клиентами
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
