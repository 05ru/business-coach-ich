import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function ConsultationSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 10,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Бесплатная консультация
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Оставьте заявку и получите консультацию юриста бесплатно
          </p>

          <div className="flex justify-center gap-4 mb-10">
            {[
              { value: timeLeft.days, label: 'дней' },
              { value: timeLeft.hours, label: 'часов' },
              { value: timeLeft.minutes, label: 'минут' },
              { value: timeLeft.seconds, label: 'секунд' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2 min-w-[70px]">
                  <div className="text-3xl font-bold">
                    {String(item.value).padStart(2, '0')}
                  </div>
                </div>
                <div className="text-sm opacity-75">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <div className="space-y-3">
              <Input
                placeholder="Ваше имя"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Input
                type="tel"
                placeholder="Телефон"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-red-500 hover:bg-red-600">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
