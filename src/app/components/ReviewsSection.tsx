import { Star, User } from 'lucide-react';

const reviews = [
  {
    name: 'Иван Петров',
    text: 'Отличная работа! Помогли решить сложный семейный спор. Профессиональный подход и внимательное отношение к клиенту.',
    rating: 5,
    date: '15 января 2026'
  },
  {
    name: 'Мария Смирнова',
    text: 'Благодарю за качественную консультацию по корпоративному праву. Все объяснили доступно и помогли составить договор.',
    rating: 5,
    date: '02 февраля 2026'
  },
  {
    name: 'Александр Козлов',
    text: 'Рекомендую! Выиграли трудовой спор благодаря грамотной стратегии. Очень доволен результатом сотрудничества.',
    rating: 5,
    date: '28 февраля 2026'
  }
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Отзывы
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Что говорят наши клиенты о работе с нами
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
