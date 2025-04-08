import { AppRouter } from "@/app/providers/router";
import { useCart } from "@/entities/cart";
import { getCartThunk } from "@/entities/cart/model/cartSlice";
import { useDispatch } from "@/entities/store";
import { clearCart } from "@/shared/api/cart";
import { AppFooter } from "@/widgets/app-footer";
import { AppHeader } from "@/widgets/app-header";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "./app.module.scss";
import { Newsletter } from "@/widgets/newsletter";
import { Modal } from "@/shared/ui/modal";
import { Success } from "@/widgets/success";
import { withProviders } from "@/app/providers/withProviders";
import { useClothes } from "@/entities/clothes";
import { getLocation } from "@/shared/api/user";

const App = () => {
  useCart();
  useClothes();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  useEffect(() => {
    getLocation().then((data) => {
      localStorage.setItem("location", JSON.stringify(data));
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleClose = useCallback(() => {
    navigate(location.pathname, { replace: true });
    setShowSuccessModal(false);
  }, [navigate, location.pathname]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userId = localStorage.getItem("userId")!;
    if (params.get("status") === "success") {
      setShowSuccessModal(true);
      clearCart(userId).then(() => {
        dispatch(getCartThunk(userId));
      });
    }
  }, [location, dispatch]);

  return (
    <div className={styles.app}>
      {showSuccessModal && (
        <Modal onClose={handleClose} className={styles.successModal}>
          <Success />
        </Modal>
      )}
      <AppHeader />
      <main>
        <AppRouter />
        <Newsletter />
      </main>
      <AppFooter />
    </div>
  );
};

const AppWithProviders = withProviders(App);
export default AppWithProviders;
