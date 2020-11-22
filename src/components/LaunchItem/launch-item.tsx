import React, { ReactElement } from "react";
import {
  StyledItem,
  StyledPosition,
  StyledTitle,
  StyledDetails,
  StyledDate,
  StyledType,
} from "./launch-item.styled";

type TProps = {
  position: number;
  title: string;
  date: string;
  type: string;
};

export function LaunchItem({
  position,
  title,
  date,
  type,
}: TProps): ReactElement {
  return (
    <StyledItem>
      <StyledPosition># {position}</StyledPosition>
      <StyledTitle>{title}</StyledTitle>
      <StyledDetails>
        <StyledDate>{date}</StyledDate>

        <StyledType>{type}</StyledType>
      </StyledDetails>
    </StyledItem>
  );
}
