import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { businessCoachingBannerDataUri } from '../../assets/business-coaching-banner-data-uri';
export function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={businessCoachingBannerDataUri}
          alt="Бизнес-аналитика и рост"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Юридическая справка
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Профессиональная помощь в решении юридических вопросов
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
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
