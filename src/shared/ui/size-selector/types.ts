export type TSizeSelectorProps = {
  sizes: string[];
  selectedSize: string;
  size?: "small" | "medium";
  showTitle?: boolean;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
};