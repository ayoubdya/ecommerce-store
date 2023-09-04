"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();

  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images[0].url}
          alt={data.name}
          fill
          className="aspect-square rounded-xl object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 transition w-full px-6 absolute bottom-5">
          <div className="flex justify-center gap-x-2">
            <IconButton onClick={onPreview}>
              <Expand size={20} className="text-gray-500" />
            </IconButton>
            <IconButton onClick={onAddToCart}>
              <ShoppingCart size={20} className="text-gray-500" />
            </IconButton>
          </div>
        </div>
      </div>
      <div>{/* description */}</div>
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
