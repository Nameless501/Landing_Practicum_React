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

  @media screen and (max-width: 767px) {
    grid-template-columns: 150px 150px;
    grid-template-rows: 120px 15px 65px 15px 120px 15px 15px 120px;
    column-gap: 15px;
    grid-template-areas:
      "leftTop middleTop"
      ". middleTop"
      "leftBottom middleTop"
      "leftBottom ."
      "leftBottom middleBottom"
      ". middleBottom"
      "rightTop ."
      "rightTop rightBottom";
  }
`

export const HowToGridWrapper = styled(GridWrapper)`
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-template-rows: auto;
  grid-template-areas:
    "left middle right";
  gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 315px;
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "left"
      "middle"
      "right";
  }
`