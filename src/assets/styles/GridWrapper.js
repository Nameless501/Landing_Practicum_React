import styled from "styled-components";

export const GridWrapper = styled.div`
  margin: ${(props) => props.margin ? props.margin : '0'};
  padding: ${(props) => props.padding ? props.padding : '0'};
  max-width: ${(props) => props.maxWidth};
  box-sizing: border-box;
  display: grid;
  gap: ${(props) => props.gap};
  border: 0;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`

export const VideoGridWrapper = styled(GridWrapper)`
  grid-template-columns: 387px 386px 387px;
  grid-template-rows: 215px 20px 20px 135px 20px 205px;
  grid-template-areas:
  "leftTop middleTop rightTop"
  ". middleTop rightTop"
  "leftBottom middleTop ."
  "leftBottom middleTop rightBottom"
  "leftBottom  . rightBottom"
  "leftBottom middleBottom rightBottom";
  column-gap: 20px;
`