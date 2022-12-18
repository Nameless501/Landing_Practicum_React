import styled from "styled-components";

export const TextSpan = styled.span`
  margin: ${props => props.margin ? props.margin : '0'};
  padding: 0;
  display: inline-block;
  vertical-align: ${props => props.align};
`

export const TextSpanWithImage = styled(TextSpan)`
  width: ${props => props.width};
  height: ${props => props.height};

  img {
    margin: 0;
    padding: 0;
    display: block;
    width: ${props => props.width};
    height: ${props => props.height};
  }
`
