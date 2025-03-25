export const useDeliveryDates = () => {
  const date = new Date();
  date.setDate(date.getDate() + 10);
  const today = date.toLocaleString("en-US", { day: "numeric", month: "long" });
  
  date.setDate(date.getDate() + 10);
  const deliveryDate = date.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
  });
  return { today, deliveryDate}
}