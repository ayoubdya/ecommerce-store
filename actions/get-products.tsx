import { Product } from "@/types";
import qs from "query-string";

interface Query extends qs.StringifiableRecord {
  sizeId?: string;
  colorId?: string;
  categoryId?: string;
  isFeatured?: boolean;
}

const URL = process.env.NEXT_PUBLIC_API_URL + "/products";

async function getProducts(query: Query): Promise<Product[]> {
  const queryString = qs.stringifyUrl({
    url: URL,
    query,
  });
  const res = await fetch(queryString);
  return res.json();
}

export default getProducts;
