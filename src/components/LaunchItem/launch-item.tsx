import React, { ReactElement } from "react";
import format from "date-fns/format";

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
  date: number;
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
        <StyledDate>{format(new Date(date), "do MMM yyyy")}</StyledDate>

        <StyledType>{type}</StyledType>
      </StyledDetails>
    </StyledItem>
  );
}
