import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@shopminimal.ru',
      link: 'mailto:info@shopminimal.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Примерная, 123',
      link: '#'
    }
  ];

  return (
    <section id="contacts" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
          <p className="text-muted-foreground">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon name={contact.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                    {contact.title}
                  </h3>
                  <a
                    href={contact.link}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="animate-fade-in">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6">Напишите нам</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Ваше сообщение..."
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Отправить
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contacts;
