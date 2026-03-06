export function ClientsSection() {
  const clients = [
    { name: 'Сбербанк', color: 'text-green-600' },
    { name: 'ВТБ', color: 'text-blue-600' },
    { name: 'Газпром', color: 'text-blue-700' },
    { name: 'Лукойл', color: 'text-red-600' }
  ];

  return (
    <section id="clients" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Мои клиенты
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Нам доверяют ведущие компании России
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-center p-6 hover:scale-110 transition-transform"
            >
              <div className={`text-2xl font-bold ${client.color}`}>
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
