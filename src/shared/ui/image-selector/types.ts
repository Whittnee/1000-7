export type TImageSelectorProps = {
  images: string[];
  selectedImage: string;
  direction: "row" | "column" 
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>
} & React.HTMLAttributes<HTMLImageElement>;