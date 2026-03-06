import { useState, useEffect, type FormEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const GOOGLE_SHEETS_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

export function ConsultationSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 10,
    minutes: 45,
    seconds: 30
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage('');

    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
      setStatusMessage('Не настроен адрес для сохранения заявок. Добавьте VITE_GOOGLE_SHEETS_WEBHOOK_URL.');
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          phone,
          source: 'consultation-form',
          createdAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`Ошибка отправки: ${response.status}`);
      }

      setName('');
      setPhone('');
      setStatusMessage('Спасибо! Ваша заявка отправлена.');
    } catch {
      setStatusMessage('Не удалось отправить заявку. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="space-y-3" onSubmit={handleSubmit}>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ваше имя"
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Телефон"
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-red-500 hover:bg-red-600" disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
              </Button>
              {statusMessage ? (
                <p className="text-sm text-white/90">{statusMessage}</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
