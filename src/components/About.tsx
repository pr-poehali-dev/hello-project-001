import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Sparkles',
      title: 'Качество',
      description: 'Только проверенные бренды и производители'
    },
    {
      icon: 'Truck',
      title: 'Быстрая доставка',
      description: 'Доставим ваш заказ в течение 1-3 дней'
    },
    {
      icon: 'Shield',
      title: 'Гарантия',
      description: 'Официальная гарантия на все товары'
    },
    {
      icon: 'Heart',
      title: 'Поддержка',
      description: 'Команда всегда готова помочь вам'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">О нас</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы создали магазин для тех, кто ценит простоту, качество и стиль.
            Наша миссия — делать шопинг удобным и приятным.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
