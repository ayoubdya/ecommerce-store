import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, data }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-3xl font-bold">{title}</h3>
      {data.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
