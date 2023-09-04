"use client";

import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavBarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex gap-x-2 px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-bold">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavBarActions;
