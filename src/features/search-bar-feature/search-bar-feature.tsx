import { TSlicedClothes } from "@/shared/types/clothes";
import { FC, useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./search-bar-feature.module.scss"
import { Link } from "react-router";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { TSearchBarFeatureProps } from "@/features/search-bar-feature/search-bar-feature-types";

export const SearchBarFeature: FC<TSearchBarFeatureProps> = ({ clothes }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<TSlicedClothes[]>([]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      if (value) {
        const filteredItems = clothes.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredItems(filteredItems);
      } else setFilteredItems([]);
    },
    [clothes]
);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    setFilteredItems([]);
  }, []);

  return (
    <div className={styles.searchBarFeature}>
      <FaSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      {filteredItems.length > 0 && (
        <ul className={styles.dropdown}>
          {filteredItems.map((item) => (
            <Link to={`/clothes/${item.id}`} onClick={handleClearSearch}>
              <li className={styles.dropdownItem} key={item.id}>
                <img src={item.image} alt={item.name} />
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
      <IoMdClose
        className={clsx(styles.closeIcon, { [styles.active]: searchTerm })}
        onClick={handleClearSearch}
      />
    </div>
  );
};
