export const STRIPE_PUBLISHABLE_KEY = import.meta.env
  .VITE_STRIPE_PUBLISHABLE_KEY;
export const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_DEV
    : import.meta.env.VITE_API_ORIGIN;
