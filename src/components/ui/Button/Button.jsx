import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  onClick,
}) {
  const baseStyles =
    "inline-flex item-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    warning:
      "bg-yellow-500 text-black hover:bg-yellow-600 focus:bg-yellow-500 focus:ring-yellow-400",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-400",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const responsive = {
    sm: "sm:px-2 sm:py-1 sm:text-sm",
    md: "md:px-2 md:py-1 md:text-base",
    lg: "lg:px-2 lg:py-1 lg:text-lg",
  };

  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    responsive[size],
    fullWidth && "w-full",
  );

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
