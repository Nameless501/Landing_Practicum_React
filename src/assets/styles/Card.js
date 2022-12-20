import styled from "styled-components";
import { CardImage } from "./CardImage";

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
  grid-area: ${(props) => props.gridArea};
  position: relative;
  overflow: hidden;
`

export const CardWithVideo = styled(Card)`
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  & > ${CardImage} {
    transform: scale(1);
    transition: transform .3s linear;
  }

  &:hover > ${CardImage} {
    -ms-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
    transition: transform .3s linear;
  }
`