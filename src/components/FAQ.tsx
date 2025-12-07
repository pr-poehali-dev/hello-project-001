import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Как оформить заказ?',
      answer: 'Добавьте товары в корзину, нажмите "Оформить заказ", заполните данные для доставки и выберите способ оплаты. Мы отправим вам подтверждение на email.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), через СБП, Apple Pay и Google Pay. Также возможна оплата при получении.'
    },
    {
      question: 'Можно ли вернуть товар?',
      answer: 'Да, вы можете вернуть товар в течение 14 дней с момента получения, если он не был в использовании и сохранена оригинальная упаковка.'
    },
    {
      question: 'Есть ли гарантия на товары?',
      answer: 'Все товары имеют официальную гарантию производителя. Срок гарантии зависит от категории товара и указан на странице каждого продукта.'
    },
    {
      question: 'Как отследить заказ?',
      answer: 'После отправки заказа вы получите трек-номер на email. С его помощью можно отслеживать статус доставки на нашем сайте или сайте транспортной компании.'
    },
    {
      question: 'Доставляете ли вы в регионы?',
      answer: 'Да, мы доставляем по всей России. Стоимость и сроки доставки рассчитываются автоматически при оформлении заказа.'
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold">Часто задаваемые вопросы</h2>
          <p className="text-muted-foreground">
            Ответы на популярные вопросы наших клиентов
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 animate-fade-in"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
