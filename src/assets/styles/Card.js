import styled from "styled-components";

export const Card = styled.div`
  margin: ${(props) => props.margin ? props.margin : '0'};
  padding: ${(props) => props.padding ? props.padding : '0'};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.theme.colors.main[props.color]};
  justify-content: ${(props) => props.justify};
`