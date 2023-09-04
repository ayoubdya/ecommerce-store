"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface Props {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<Props> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-2 lg:hidden"
      >
        Filters <Plus size={20} />
      </Button>
      <Dialog
        as="div"
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="ml-auto flex flex-col w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex justify-end px-4">
              <IconButton onClick={() => setOpen(false)}>
                <X size={15} />
              </IconButton>
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
