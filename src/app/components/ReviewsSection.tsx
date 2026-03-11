import { User } from 'lucide-react';

const suitableFor = [
  'Начинающим предпринимателям',
  'Владельцам малого и среднего бизнеса',
  'Стартапам',
  'Компаниям в стадии роста',
  'Бизнесу, который сталкивается со снижением прибыли',
  'Командам, готовящимся к масштабированию'
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Кому подойдут мои услуги
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Работаю с предпринимателями и компаниями на разных этапах развития
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {suitableFor.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="font-semibold leading-snug">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
