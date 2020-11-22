import styled from "styled-components";
import { TProps } from "./button.types";

export const StyledButton = styled.button<TProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: ${({ theme }) => theme.colors.fontFamilty};
  font-weight: 700;
  border: 0;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  ${({ isLeftRound }) =>
    isLeftRound
      ? "border-top-left-radius: 30px;border-bottom-left-radius:30px;"
      : ""};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    margin-left: 1rem;
  }
`;
