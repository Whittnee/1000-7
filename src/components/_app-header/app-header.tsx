import { FaSearch, FaShoppingBag } from "react-icons/fa";
import styles from "./app-header.module.scss";
import { Link, useLocation } from "react-router";
import React, { FC, useState } from "react";
import { useSelector } from "../../services/store";
import { selectCart } from "../../services/slices/cartSlice";
import { TClothes } from "../../utils/types";
import { selectClothes } from "../../services/slices/clothesSlice";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

export const AppHeader: FC = () => {
  const cartClothes = useSelector(selectCart);
  const clothes = useSelector(selectClothes);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<TClothes[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      const filteredItems = clothes.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems([]);
    }
  };
  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredItems([]);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <Link className={styles.Link} to="/" style={{ outline: "none" }}>
          <span className={styles.logo}>1000-7</span>
        </Link>
        <div className={styles.search}>
          <FaSearch style={{ color: "black" }} />
          <input
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          {filteredItems.length > 0 && (
            <ul className={styles.dropdown}>
              {filteredItems.map((item) => (
                <Link
                  to={`/clothes/${item.id}`}
                  onClick={handleClearSearch}
                  state={{ background: location }}
                >
                  <li className={styles.dropdownItem} key={item.id}>
                    <img src={item.images[0]} alt={item.name} />
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          )}
          <IoMdClose className={clsx(styles.closeIcon, {[styles.active]: searchTerm})} onClick={handleClearSearch} />
        </div>
        <div>
          <Link to="/cart">
            <button type="button" className={styles.button}>
              <FaShoppingBag />
              {cartClothes.length > 0 && (
                <span className={styles.count}>{cartClothes.length}</span>
              )}
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
