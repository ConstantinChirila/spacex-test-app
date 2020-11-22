import React, { ReactElement, useContext } from "react";
import { StyledHeader, StyledImg, StyledLogo } from "./header.styled";
import logo from "./../../assets/spacex-logo.png";
import { Button, LaunchesContext } from "..";

export function Header(): ReactElement {
  const { refreshData } = useContext(LaunchesContext);

  return (
    <StyledHeader>
      <StyledLogo>
        <StyledImg src={logo} alt="SapceX" />
        <span>Launches</span>
      </StyledLogo>
      <Button onClick={() => (refreshData ? refreshData() : null)} isLeftRound>
        Reload Data
        <Icon />
      </Button>
    </StyledHeader>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M20 11A8.1 8.1 0 004.5 9M4 4v5h5M4 13a8.1 8.1 0 0015.5 2m.5 5v-5h-5" />
    </svg>
  );
}
