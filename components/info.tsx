"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="font-bold text-3xl text-gray-900">{data.name}</h1>
      <div className="text-2xl text-gray-900">
        <Currency value={data.price} />
      </div>
      <hr />
      <div className="flex flex-col space-y-6">
        <div className="flex space-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <span>{data.size.name}</span>
        </div>
        <div className="flex space-x-2">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            style={{ backgroundColor: data.color.value }}
            className="rounded-full h-6 w-6 border border-gray-600"
          />
        </div>
      </div>
      <div className="mt-10">
        <Button className="flex items-center space-x-4">
          <span>Add to cart</span>
          <ShoppingCart size={20} color="white" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
