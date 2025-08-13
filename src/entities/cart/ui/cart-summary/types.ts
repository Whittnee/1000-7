export type TCartSummaryProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  size: 'medium' | 'big';
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  loading: boolean;
  children: React.ReactNode
} & React.HtmlHTMLAttributes<HTMLDivElement>;