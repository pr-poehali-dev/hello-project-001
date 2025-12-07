import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Минималистичный шопинг
            <span className="block text-primary mt-2">для современных людей</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Простота, качество и удобство в каждой детали. 
            Откройте для себя продукты, которые делают жизнь лучше.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="text-base px-8" asChild>
              <a href="#catalog">Смотреть каталог</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <a href="#about">Узнать больше</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-16 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Товаров</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Клиентов</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Довольных</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
