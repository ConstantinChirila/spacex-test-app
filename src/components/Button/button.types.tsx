import { MouseEvent } from "react";

export type TProps = {
  isLeftRound?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
