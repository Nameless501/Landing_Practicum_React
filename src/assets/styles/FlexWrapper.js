import styled from "styled-components";

export const FlexWrapper = styled.div`
  margin: ${(props) => props.margin ? props.margin : '0'};
  padding: ${(props) => props.padding ? props.padding : '0'};
  max-width: ${(props) => props.maxWidth};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.theme.colors.main[props.color]};
  border: 0;
  flex-wrap: ${(props) => props.wrap};
  border-radius: ${(props) => props.radius};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  position: ${(props) => props.position};

  &:hover {
    cursor: ${(props) => props.pointer ? "pointer" : "auto"};
  }
`

export const LinkFlexWrapper = styled(FlexWrapper).attrs(props => ({
  href: props.link,
  target: props.self ? "_self" : "_blank",
}))`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  &:hover > p {
    color: ${({ theme }) => theme.colors.main.blue};
  }

  &:active > p {
    color: ${({ theme }) => theme.colors.button.darkBlue};
  }
`