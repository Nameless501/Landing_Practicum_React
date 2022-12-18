import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 30px 0;
  max-width: ${({ theme }) => theme.section.width};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main.white};
`