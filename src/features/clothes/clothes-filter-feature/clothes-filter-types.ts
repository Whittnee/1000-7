export type TCLothesFilterFeatureProps = {
  selectedSize: string;
  selectedColor: string;
  selectedCategory: string;
  prices: number[];
  setPrices: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  handleFilter: () => void;
};