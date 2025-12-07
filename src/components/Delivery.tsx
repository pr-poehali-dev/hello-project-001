import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  const methods = [
    {
      icon: 'Package',
      title: 'Курьером',
      time: '1-2 дня',
      price: '300 ₽',
      description: 'Доставка по городу в удобное для вас время'
    },
    {
      icon: 'Home',
      title: 'Пункт выдачи',
      time: '2-3 дня',
      price: 'Бесплатно',
      description: 'Более 500 пунктов выдачи по всей стране'
    },
    {
      icon: 'Truck',
      title: 'Экспресс',
      time: 'В день заказа',
      price: '600 ₽',
      description: 'Молниеносная доставка для срочных заказов'
    }
  ];

  return (
    <section id="delivery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Доставка</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите удобный способ получения заказа
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon name={method.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{method.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{method.time}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">{method.price}</div>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Бесплатная доставка при заказе от 3000 ₽
          </p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
