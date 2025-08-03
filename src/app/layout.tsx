import { AppFooter } from "@/widgets/app-footer";
import { AppHeader } from "@/widgets/app-header";
import { Newsletter } from "@/widgets/newsletter";
import { FC, useCallback, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import styles from "./layout.module.scss";
import { useCart } from "@/entities/cart";
import { useClothes } from "@/entities/clothes";
import { useDispatch } from "@/entities/store";
import { getLocation } from "@/shared/api/user";
import { clearCart } from "@/shared/api/cart";
import { getCartThunk } from "@/entities/cart/model/cartSlice";
import { showOverlay } from "@/entities/overlay";
import { Overlay } from "@/app/providers/overlay/overlay";

export const Layout: FC = () => {
  useCart();
  useClothes();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getLocation().then((data) => {
      localStorage.setItem("location", JSON.stringify(data));
    });
  }, []);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVh();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleClose = useCallback(() => {
    const params = new URLSearchParams(location.search);
    params.delete("status");
    navigate(
      {
        pathname: location.pathname,
        search: params.toString(),
      },
      { replace: true }
    );
  }, [navigate, location.pathname, location.search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userId = localStorage.getItem("userId");
    if (!userId) return;
    if (params.get("status") === "success") {
      dispatch(
        showOverlay({ key: "successOrder", onCloseCallback: handleClose })
      );
      clearCart(userId)
        .then(() => {
          dispatch(getCartThunk(userId));
        })
        .catch((e) => {
          console.error("Не удалось очистить корзину:", e);
        });
    }
    return () => {};
  }, [location.search, dispatch, handleClose]);

  return (
    <div className={styles.layout}>
      <AppHeader />
      <main className={styles.main}>
        <Overlay>
          <Outlet />
        </Overlay>
        <Newsletter />
      </main>
      <AppFooter />
    </div>
  );
};
