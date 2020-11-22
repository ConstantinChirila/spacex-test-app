import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 140rem;
  margin: 0 auto;
  padding: 1rem 2rem;
`;

export const StyledImg = styled.img`
  max-width: 200px;
`;

export const StyledLogo = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 400;
  span {
    margin-left: -1.5rem;
  }
`;
