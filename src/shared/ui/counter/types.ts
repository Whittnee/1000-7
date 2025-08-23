export type TCounterProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
  size?: "small" | "medium" | "big";
} & React.HTMLAttributes<HTMLDivElement>;
