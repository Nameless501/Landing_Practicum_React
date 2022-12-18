import styled from "styled-components";

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align ? props.align : "center"};
  gap: ${props => props.gap};
  list-style: none;

  li {
    margin: 0;
    padding: 0;
  }
`