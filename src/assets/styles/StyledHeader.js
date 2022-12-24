import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 30px 120px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main.white};
  position: sticky;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 767px) {
    padding: 25px 30px;
  }
`