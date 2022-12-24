import styled from "styled-components";

export const Link = styled.a.attrs(props => ({
  href: props.link,
  target: props.blank ? "_blank" : "",
}))`
  margin: 0;
  padding: 0;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

export const NavLink = styled(Link)`
  & > p {
    color: ${({ theme }) => theme.colors.main.black};
  }

  &:visited > p {
    color: ${({ theme }) => theme.colors.main.black};
  }

  &:hover > p {
    color: ${({ theme }) => theme.colors.main.blue};
  }

  &:active > p {
    color: ${({ theme }) => theme.colors.button.darkBlue};
  }

  &.active > p {
    color: ${({ theme }) => theme.colors.main.blue};
  }
`

export const NavLinkUnderline = styled(NavLink)`
  text-decoration: underline;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  font-size: ${({ theme }) => theme.fonts.size.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeight.regular};
  color: ${({ theme }) => theme.colors.main.darkGray};

  &:visited {
    color: ${({ theme }) => theme.colors.main.darkGray};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.main.blue};
  }

  &:active {
    color: ${({ theme }) => theme.colors.button.darkBlue};
  }

  @media screen and (max-width: 767px) {
    font-weight: ${({ theme }) => theme.fonts.weight.mobile.regular};
    font-size: ${({ theme }) => theme.fonts.size.mobile.regular};
    line-height: ${({ theme }) => theme.fonts.lineHeight.mobile.regular};
  }
`