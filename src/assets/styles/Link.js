import styled from "styled-components";

export const Link = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.main.black};

  &:visited {
    color: ${({ theme }) => theme.colors.main.black};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.main.blue};
  }

  &:active {
    color: ${({ theme }) => theme.colors.button.darkBlue};
  }
`