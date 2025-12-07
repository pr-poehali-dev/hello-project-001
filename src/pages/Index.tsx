import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import About from '@/components/About';
import Delivery from '@/components/Delivery';
import FAQ from '@/components/FAQ';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Cart, { CartItem } from '@/components/Cart';
import { Product } from '@/components/ProductCard';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const products: Product[] = [
    {
      id: 1,
      name: 'Беспроводные наушники Premium',
      price: 8990,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      category: 'Электроника',
      inStock: true
    },
    {
      id: 2,
      name: 'Умные часы Sport Edition',
      price: 12990,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      category: 'Электроника',
      inStock: true
    },
    {
      id: 3,
      name: 'Минималистичный рюкзак',
      price: 4990,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
      category: 'Аксессуары',
      inStock: true
    },
    {
      id: 4,
      name: 'Керамическая кружка',
      price: 890,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop',
      category: 'Дом',
      inStock: true
    },
    {
      id: 5,
      name: 'Портативная колонка',
      price: 5990,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
      category: 'Электроника',
      inStock: true
    },
    {
      id: 6,
      name: 'Стильный блокнот',
      price: 690,
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&h=500&fit=crop',
      category: 'Канцелярия',
      inStock: true
    },
    {
      id: 7,
      name: 'Беспроводная мышь',
      price: 2490,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
      category: 'Электроника',
      inStock: false
    },
    {
      id: 8,
      name: 'USB-C хаб',
      price: 3490,
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
      category: 'Электроника',
      inStock: true
    }
  ];

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }]);
    }

    toast({
      title: 'Товар добавлен в корзину',
      description: product.name,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: 'Товар удален из корзины',
      variant: 'destructive'
    });
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-1">
        <Hero />
        <Catalog products={products} onAddToCart={handleAddToCart} />
        <About />
        <Delivery />
        <FAQ />
        <Contacts />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
