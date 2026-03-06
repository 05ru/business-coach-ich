export function PracticeSection() {
  const practices = [
    'Гражданские споры',
    'Семейное право',
    'Трудовые споры',
    'Корпоративное право',
    'Защита прав потребителей',
    'Административное право',
    'Жилищные споры',
    'Наследственное право'
  ];

  return (
    <section id="practice" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Часть нашей частной практики
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Мы специализируемся на широком спектре юридических услуг, 
              обеспечивая профессиональную поддержку как для частных лиц, 
              так и для корпоративных клиентов.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Наша команда опытных юристов готова помочь вам в решении 
              самых сложных правовых вопросов, обеспечивая индивидуальный 
              подход к каждому клиенту.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {practices.map((practice, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
              >
                <p className="text-sm font-medium">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
