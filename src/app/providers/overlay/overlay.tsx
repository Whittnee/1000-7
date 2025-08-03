import { TOverlayProps } from "@/app/providers/overlay/types";
import { hideOverlay, selectOnCloseCallback, selectOverlayKey } from "@/entities/overlay";
import { useDispatch, useSelector } from "@/entities/store";
import { SuccessOrderOverlay } from "@/widgets/success-order-overlay";
import { SuccessSubscriptionOverlay } from "@/widgets/success-subscription-overlay";
import { FC, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router";
import styles from "./styles.module.scss"
import { AnimatePresence } from "framer-motion";
import { Modal } from "@/shared/ui/modal";

const overlayMap = {
  successOrder: <SuccessOrderOverlay />,
  successSubscription: <SuccessSubscriptionOverlay />,
};

export const Overlay: FC<TOverlayProps> = ({ children }) => {
  const overlayKey = useSelector(selectOverlayKey);
  const dispatch = useDispatch();
  const location = useLocation();
  const onCloseCallback = useSelector(selectOnCloseCallback);

  const isTouchDevice = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (isTouchDevice && overlayKey)
      window.scrollTo({ top: 0, behavior: "instant" });
  }, [isTouchDevice, overlayKey]);

  useEffect(() => {
    dispatch(hideOverlay());
  }, [location, dispatch]);

  if (!overlayKey) return children;

  const content = overlayMap[overlayKey];

  const handleCloseOverlay = () => {
    if (onCloseCallback) onCloseCallback();
    dispatch(hideOverlay());
  };

  return (
    <>
      {isTouchDevice ? (
        <div className={styles.overlayMobile}>{content}</div>
      ) : (
        <>
          {children}
          <AnimatePresence>
            {overlayKey && (
              <Modal onClose={handleCloseOverlay}>{content}</Modal>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};