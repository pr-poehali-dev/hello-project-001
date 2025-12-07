import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group card-hover overflow-hidden border-2 border-transparent hover:border-primary/20 animate-fade-in-up bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        {!product.inStock && (
          <Badge className="absolute top-3 right-3 z-20 animate-pulse" variant="destructive">
            Нет в наличии
          </Badge>
        )}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial from-primary/10 to-transparent z-[5]" />
      </div>
      
      <CardContent className="p-5 space-y-3 relative">
        <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium transition-colors group-hover:text-primary">
          {product.category}
        </div>
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {product.price.toLocaleString('ru-RU')} ₽
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          className="w-full btn-glow relative z-10 font-semibold text-base"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;