"use client";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Summary: React.FC<{ className: string }> = ({ className }) => {
  const cart = useCart();
  const clearCart = useCart((state) => state.clearCart);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      clearCart();
    } else if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, clearCart]);

  const total = cart.items.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  async function onCheckout() {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: cart.items.map((product) => product.id),
      }
    );
    window.location.href = res.data.url;
  }

  return (
    <div className={className}>
      <h2 className="font-medium text-lg text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={total} />
        </div>
        <Button
          disabled={cart.items.length === 0}
          onClick={onCheckout}
          className="w-full"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Summary;
