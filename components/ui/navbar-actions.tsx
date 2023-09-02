"use client";

import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import { useEffect, useState } from "react";

const NavBarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex gap-x-2 px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="text-sm font-bold">0</span>
      </Button>
    </div>
  );
};

export default NavBarActions;
