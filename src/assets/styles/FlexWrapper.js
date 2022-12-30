import styled from "styled-components";

export const FlexWrapper = styled.div`
  margin: ${(props) => props.margin ? props.margin : '0'};
  padding: ${(props) => props.padding ? props.padding : '0'};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => props.width};
  box-sizing: border-box;
  display: ${(props) => props.hideOnDesktop ? "none" : "flex"};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.theme.colors.main[props.color]};
  border: 0;
  flex-wrap: ${(props) => props.wrap};
  border-radius: ${(props) => props.radius};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  position: ${(props) => props.position};
  grid-area: ${(props) => props.area};

  &:hover {
    cursor: ${(props) => props.pointer ? "pointer" : "auto"};
  }

  @media screen and (max-width: 767px) {
    display: ${(props) => props.hideOnMobile ? "none" : "flex"};
    flex-direction: ${(props) => props.directionMobile};
    gap: ${(props) => props.gapMobile};
    width: ${(props) => props.widthMobile};
    padding: ${(props) => props.paddingMobile};
    overflow: ${(props) => props.scrollOnMobile && "scroll"};
  }
`

export const LinkFlexWrapper = styled(FlexWrapper).attrs(props => ({
  href: props.link,
  target: props.self ? "_self" : "_blank",
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.main.black};

  &:visited > p {
    color: ${({ theme }) => theme.colors.main.black};
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
    }

    &:hover > p {
      color: ${({ theme }) => theme.colors.main.blue};
    }

    &:active > p {
      color: ${({ theme }) => theme.colors.button.darkBlue};
    }
  }
`