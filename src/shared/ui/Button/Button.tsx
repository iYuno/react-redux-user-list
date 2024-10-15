import clsx from "clsx";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "muted";
}

function ForwardedButton(
  { variant, className, ...props }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <button
      className={clsx(styles.button, variant ? styles[variant] : "", className)}
      ref={ref}
      {...props}
    />
  );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ForwardedButton,
);

export { Button };
