import clsx from "clsx";
import React from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  danger?: boolean;
}

function ForwardedInput(
  { danger, className, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      className={clsx(styles.input, danger ? styles.danger : "", className)}
      ref={ref}
      {...props}
    />
  );
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(ForwardedInput);

export { Input };
