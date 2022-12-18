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
  border-radius: ${(props) => props.radius};
`