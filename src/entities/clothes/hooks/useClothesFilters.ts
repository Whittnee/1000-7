import { TSlicedProduct } from "@/shared/types/products";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useClothesFilters = (clothes: TSlicedProduct[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || ""
  );
  const [prices, setPrices] = useState<number[]>([
    Number(searchParams.get("min")) || 0,
    Number(searchParams.get("max")) || 200,
  ]);
  const [selectedSize, setSelectedSize] = useState<string>(
    searchParams.get("size") || ""
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    searchParams.get("color") || ""
  );

  const [tempCategory, setTempCategory] = useState<string>(selectedCategory);
  const [tempPrices, setTempPrices] = useState<number[]>(prices);
  const [tempSize, setTempSize] = useState<string>(selectedSize);
  const [tempColor, setTempColor] = useState<string>(selectedColor);
  const [filteredClothes, setFilteredClothes] = useState<TSlicedProduct[]>([]);

  const applyFilters = (clothes: TSlicedProduct[]) => {
    return clothes.filter((item) => {
      const priceMatch =
        item.price >= tempPrices[0] && item.price <= tempPrices[1];
      const sizeMatch = tempSize ? item.sizes.includes(tempSize) : true;
      const categoryMatch = tempCategory
        ? item.category === tempCategory
        : true;
      const colorMatch = tempColor ? item.colors.includes(tempColor) : true;
      return priceMatch && sizeMatch && colorMatch && categoryMatch;
    });
  };

  useEffect(() => {
    if (clothes.length > 0) setFilteredClothes(applyFilters(clothes));
  }, [clothes, prices, selectedSize, selectedColor, selectedCategory]); // eslint-disable-line

  const handleFilter = () => {
    setSearchParams({
      min: tempPrices[0].toString(),
      max: tempPrices[1].toString(),
      size: tempSize,
      category: tempCategory,
      color: tempColor,
    });

    setPrices(tempPrices);
    setSelectedCategory(tempCategory);
    setSelectedSize(tempSize);
    setSelectedColor(tempColor);
    setFilteredClothes(applyFilters(clothes));
  };

  return {
    tempCategory,
    tempPrices,
    tempSize,
    tempColor,
    filteredClothes,
    setTempCategory,
    setTempPrices,
    setTempSize,
    setTempColor,
    handleFilter
  };
};
