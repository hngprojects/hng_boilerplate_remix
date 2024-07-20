interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "destructive";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseStyles =
    "w-40 px-4 py-2 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-destructive text-destructive-foreground  focus:ring-destructive border hover:border-destructive hover:bg-destructive-foreground hover:text-destructive focus:ring-destructive";
      break;
    case "secondary":
      variantStyles =
        "bg-secondary text-destructive border border-destructive hover:bg-destructive-foreground hover:text-destructive focus:ring-destructive";
      break;
    case "destructive":
      variantStyles =
        "bg-destructive text-destructive-foreground  focus:ring-destructive border hover:border-destructive hover:bg-destructive-foreground hover:text-destructive focus:ring-destructive";
      break;
    default:
      variantStyles =
        "bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary focus:ring-primary";
  }

  const buttonClasses = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
