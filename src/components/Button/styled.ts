import styled from "styled-components";
import { ButtonProps } from ".";

export const StyleButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: none;
  border-radius: 50vh;
  ${({ bgColor }) => bgColor && `background-color:${bgColor};`}
  ${({ color }) => color && `color:${color};`}
    cursor: pointer;
  > a {
    text-decoration: none;
  }
`;
