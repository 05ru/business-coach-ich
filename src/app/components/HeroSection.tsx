import { FormEvent, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function HeroSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
    setName('');
    setPhone('');

    window.setTimeout(() => {
      setIsSent(false);
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Консультант анализирует рыночные показатели"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>
      <div className="relative container mx-auto px-4 min-h-[620px] md:h-[600px] flex items-start md:items-center pt-10 pb-16 md:py-10">
        <div className="max-w-2xl text-white">
          <h1 className="font-bold mb-6 leading-[1.1] text-[clamp(1.15rem,4vw,3.75rem)]">
            <span className="block whitespace-nowrap">Бизнес-коуч | Экономический консультант</span>
            <span className="block">Аналитик рынка</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Помогаю предпринимателям и компаниям принимать взвешенные финансовые решения, находить точки роста и выстраивать устойчивую стратегию развития.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mt-2 mb-4 md:mb-0">
            <h3 className="text-gray-900 text-lg font-semibold mb-4">
              Получите консультацию
            </h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <Input
                placeholder="Ваше имя"
                className="bg-gray-50"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Телефон"
                className="bg-gray-50"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                {isSent ? 'Заявка отправлена' : 'Отправить заявку'}
              </Button>
              {isSent && (
                <p className="text-sm text-emerald-600">
                  Спасибо! Заявка успешно отправлена
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
