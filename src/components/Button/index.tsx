import type { ButtonHTMLAttributes } from "react";
import { StyleButton } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  color?: string;
  pointer: boolean;
}

function Button(props: ButtonProps) {
  return <StyleButton {...props}>{props.children}</StyleButton>;
}
export default Button;
export type { ButtonProps };
