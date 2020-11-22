import React from "react";
import { StyledImage, StyledContent } from "./content.styled";

import MainImg from "../../assets/img/launch-home.png";
import MainImg2x from "../../assets/img/launch-home@2x.png";
import MainImg3x from "../../assets/img/launch-home@3x.png";
import { LaunchList } from "..";

export function Content() {
  return (
    <StyledContent>
      <StyledImage src={MainImg} srcSet={`${MainImg2x} 2x, ${MainImg3x} 3x`} />
      <LaunchList />
    </StyledContent>
  );
}
