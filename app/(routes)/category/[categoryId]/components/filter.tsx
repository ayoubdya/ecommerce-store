"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface Props {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

const Filter: React.FC<Props> = ({ valueKey, name, data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedFilter = searchParams.get(valueKey);

  function onClick(filterId: string) {
    const current = qs.parse(searchParams.toString());

    const query: any = {
      ...current,
      [valueKey]: filterId,
    };

    if (current[valueKey] === filterId) {
      delete query[valueKey];
    }

    const newQuery = qs.stringifyUrl({
      url: window.location.pathname,
      query,
    });
    router.push(newQuery);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            key={filter.id}
            className={cn(
              "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
              selectedFilter === filter.id && "text-white bg-black"
            )}
            onClick={() => onClick(filter.id)}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
