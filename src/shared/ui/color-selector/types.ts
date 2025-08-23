export type TColorSelectorProps = {
  colors: string[];
  selectedColor: string;
  size?: "small" | "medium";
  showTitle?: boolean;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
};