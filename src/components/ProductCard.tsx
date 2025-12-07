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
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-scale-in">
      <div className="relative aspect-square overflow-hidden bg-secondary/20">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <Badge className="absolute top-3 right-3" variant="destructive">
            Нет в наличии
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4 space-y-2">
        <div className="text-xs text-muted-foreground uppercase tracking-wide">
          {product.category}
        </div>
        <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
        <div className="text-2xl font-bold text-primary">
          {product.price.toLocaleString('ru-RU')} ₽
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
