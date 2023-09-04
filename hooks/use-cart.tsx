import { Product } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStoreProps {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const useCart = create(
  persist<CartStoreProps>(
    (set, get) => ({
      items: [],
      addItem: (item: Product) => {
        const { items } = get();
        const exists = items.find((i) => i.id === item.id);
        if (exists) return toast("Item already in cart");
        set({ items: [...items, item] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        const { items } = get();
        set({ items: items.filter((i) => i.id !== id) });
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
