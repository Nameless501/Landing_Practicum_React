import styled from "styled-components";

export const TextSpan = styled.span`
  margin: ${props => props.margin ? props.margin : '0'};
  padding: ${props => props.padding ? props.padding : '0'};
  display: ${(props) => props.hideOnDesktop ? "none" : "inline-block"};
  vertical-align: ${props => props.align};
  width: ${props => props.width};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    display: ${(props) => props.hideOnMobile ? "none" : "inline-block"};
  }
`

export const TextSpanWithImage = styled(TextSpan)`
  img {
    margin: 0;
    padding: 0;
    display: block;
    width: ${props => props.width};
    height: ${props => props.height};
  }
`