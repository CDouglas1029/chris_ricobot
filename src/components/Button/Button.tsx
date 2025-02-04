import { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button">;

type ButtonType = {
  children: ReactNode;
  variant?: "outlined" | "filled";
  className?: string;
} & ButtonProps;

const Button: React.FC<ButtonType> = ({
  children,
  variant = "outlined",
  className,
  onClick,
}) => {
  const variantMap = {
    filled: "bg-white",
    outlined: "bg-transparent",
  };

  return (
    <button
      onClick={onClick}
      className={`border-solid border-2 rounded-full ${variantMap[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
