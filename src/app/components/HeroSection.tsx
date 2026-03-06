import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
<<<<<<< codex/update-banner-text-and-save-form-submissions-bcb9wi

=======
>>>>>>> main
export function HeroSection() {
  return (
    <section className="relative min-h-[560px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://i.ibb.co/V0bnsNFX/20260306-0512-simple-compose-01kk0entsmeansezh1p8zre1ns-1.png"
          alt="Бизнес-аналитика и рост"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

<<<<<<< codex/update-banner-text-and-save-form-submissions-bcb9wi
      <div className="relative container mx-auto px-4 h-full flex items-start md:items-center pt-10 pb-14 md:py-10">
        <div className="max-w-2xl text-white">
          <h1 className="font-bold mb-6 leading-[1.1] text-[clamp(1.35rem,4vw,3.75rem)]">
            Бизнес-коуч | Экономический консультант
            <br />
            Аналитик рынка
=======
      <div className="relative container mx-auto px-4 h-full flex items-center py-8 md:py-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Бизнес-коуч | Экономический консультант</span>
            <span className="block">Аналитик рынка</span>
>>>>>>> main
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Помогаю предпринимателям и компаниям принимать взвешенные финансовые решения, находить точки роста и выстраивать устойчивую стратегию развития.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mb-2 md:mb-0">
            <h3 className="text-gray-900 text-lg font-semibold mb-4">
              Получите консультацию
            </h3>
            <div className="space-y-3">
              <Input
                placeholder="Ваше имя"
                className="bg-gray-50"
              />
              <Input
                type="tel"
                placeholder="Телефон"
                className="bg-gray-50"
              />
              <Button className="w-full bg-red-500 hover:bg-red-600">
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
