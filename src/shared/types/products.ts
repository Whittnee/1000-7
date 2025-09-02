export type TProduct = {
  id: number,
  name: string,
  price: number,
  images: string[],
  description: string,
  category: string
  rating: number,
  discount: number | null,
  discountedPrice: number,
  isNew: boolean,
  popular: boolean,
  sizes: string[],
  colors: string[]
}

export type TSlicedProduct = Omit<
  TProduct,
  "description" | "images"
> & {
  image: string;
}; 