import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={cn(
          "bg-black rounded-full w-auto px-5 py-3 border border-transparent text-white font-semibold disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transform",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
