export type TClothes = {
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

export type TSlicedClothes = Omit<
  TClothes,
  "description" | "images"
> & {
  image: string;
}; 