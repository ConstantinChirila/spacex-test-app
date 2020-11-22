import React, { ReactElement, PropsWithChildren } from "react";
import { StyledButton } from "./button.styled";
import { TProps } from "./button.types";

export function Button({
  children,
  isLeftRound,
  onClick,
}: PropsWithChildren<TProps>): ReactElement {
  return (
    <StyledButton isLeftRound={isLeftRound} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
