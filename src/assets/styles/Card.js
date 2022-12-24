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

export const StyledRoleCard = styled(Card)`
  padding: 50px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.main.lightGray};
  width: 590px;
  height: 712px;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    padding: 25px 20px 30px;
    border-radius: 30px;
    width: 315px;
    height: 490px;
  }
`

export const CardWithVideo = styled(Card)`
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  width: 100%;
  height: 100%;
  border-radius: 30px;

  & > ${CardImage} {
    transform: scale(1);
    transition: transform .3s linear;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  @media screen and (min-width: 1024px) {
    &:hover > ${CardImage} {
      -ms-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -o-transform: scale(1.1);
      transform: scale(1.1);
      transition: transform .3s linear;
    }
  }

  @media screen and (max-width: 767px) {
    border-radius: 15px;

    & > ${CardImage} {
      border-radius: 15px;
    }
  }
`