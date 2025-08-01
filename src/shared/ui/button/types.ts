export type TButtonProps = {
  label: React.ReactNode;
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>