import { Phone, FileSearch, Scale, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: 'Первичная консультация',
    description: 'Связываетесь с нами и получаете бесплатную консультацию по вашему вопросу'
  },
  {
    icon: FileSearch,
    title: 'Анализ ситуации',
    description: 'Детально изучаем ваше дело и разрабатываем стратегию решения'
  },
  {
    icon: Scale,
    title: 'Юридическое сопровождение',
    description: 'Представляем ваши интересы на всех этапах разбирательства'
  },
  {
    icon: CheckCircle,
    title: 'Результат',
    description: 'Добиваемся положительного решения вашего вопроса'
  }
];

export function HowIWorkSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Как я работаю?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Простой и прозрачный процесс работы с нашими клиентами
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
