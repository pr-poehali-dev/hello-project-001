import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: 'О нас', href: '#about' },
      { name: 'Доставка', href: '#delivery' },
      { name: 'Контакты', href: '#contacts' }
    ],
    help: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Возврат', href: '#' },
      { name: 'Гарантия', href: '#' }
    ],
    social: [
      { name: 'Instagram', icon: 'Instagram' },
      { name: 'Facebook', icon: 'Facebook' },
      { name: 'Twitter', icon: 'Twitter' }
    ]
  };

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Store" size={28} className="text-primary" />
              <span className="text-xl font-bold">ShopMinimal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Минималистичный шопинг для современных людей
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Помощь</h3>
            <ul className="space-y-2">
              {links.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              {links.social.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} ShopMinimal. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
