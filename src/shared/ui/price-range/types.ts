export type TPriceRangeProps = {
  min: number;
  max: number;
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
};