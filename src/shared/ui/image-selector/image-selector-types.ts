export type TImageSelectorProps = {
  images: string[];
  selectedImage: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>
};