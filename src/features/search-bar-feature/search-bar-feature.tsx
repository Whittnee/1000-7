import { TSlicedProduct } from "@/shared/types/products";
import { FC, memo, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { TSearchBarFeatureProps } from "@/features/search-bar-feature/types";
import { SearchCard } from "@/entities/clothes";

export const SearchBarFeature: FC<TSearchBarFeatureProps> = memo(
  ({ clothes, className, autofocus, handleEvent, ...otherProps }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredItems, setFilteredItems] = useState<TSlicedProduct[]>([]);
    const listRef = useRef<HTMLUListElement | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      if (value) {
        const filteredItems = clothes.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredItems(filteredItems);
      } else setFilteredItems([]);
    };

    const handleClearSearchBar = () => {
      setSearchTerm("");
      setFilteredItems([]);
    };

    const handleMove = () => {
      handleClearSearchBar();
      if (handleEvent) {
        handleEvent();
      }
    };

    return (
      <div
        className={clsx(styles.searchBarFeature, className)}
        {...otherProps}
        onBlur={(e) => {
          if (!e.relatedTarget && listRef.current) {
            listRef.current.style.display = "none";
          }
        }}
        tabIndex={-1}
      >
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={handleInputChange}
          autoFocus={autofocus}
          onFocus={() => {
            if (listRef.current) listRef.current.style.display = "block";
          }}
        />
        {filteredItems.length > 0 && (
          <ul ref={listRef} className={styles.dropdown}>
            {filteredItems.map((item) => (
              <li key={item.id}>
                <SearchCard
                  image={item.image}
                  name={item.name}
                  productId={item.id}
                  onClick={handleMove}
                />
              </li>
            ))}
          </ul>
        )}
        <IoMdClose
          className={clsx(styles.closeIcon, { [styles.active]: searchTerm })}
          onClick={handleClearSearchBar}
        />
      </div>
    );
  }
);
