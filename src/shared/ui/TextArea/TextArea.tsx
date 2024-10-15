import clsx from "clsx";
import React from "react";
import styles from "./TextArea.module.scss";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function ForwardedTextArea(
  { className, ...props }: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
  return (
    <textarea
      className={clsx(styles.textarea, className)}
      ref={ref}
      {...props}
    />
  );
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ForwardedTextArea,
);

export { TextArea };
