import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";
import whiteArrow from '../images/arrow_white.svg';
import blackArrow from '../images/arrow_black.svg';
import whitePlay from '../images/play_white.svg';
import blackPlay from '../images/play_black.svg';
import closeIcon from '../images/close_icon.svg';

export const Button = styled.button.attrs(props => ({
  type: props.type ? props.type : "button",
  disabled: props.disabled ? true : false,
}))`
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: border-box;
  border: 0;
  border-radius: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: auto;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.main.gray};
  }

  &:disabled > p {
    color: ${({ theme }) => theme.colors.button.gray};
  }
`

export const ButtonPrimary = styled(Button)`
  width: 315px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.button.secondary};

  & > p {
    color: ${({ theme }) => theme.colors.main.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.blue};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.button.darkBlue};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.button.lightGray};
  }
`

export const ButtonSecondary = styled(ButtonPrimary)`
  width: 285px;
  height: 50px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.main.gray};
  }
`

export const ButtonSecondarySmall = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.main.white};

  & > p {
    color: ${({ theme }) => theme.colors.button.secondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.gray};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.main.gray};
  }
`

export const ButtonGhost = styled(Button)`
  width: 285px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.main.white};
  border: 2px solid ${({ theme }) => theme.colors.main.gray};
  color: ${({ theme }) => theme.colors.main.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.lightGray};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.button.lightGray};
  }
`

export const ButtonArrow = styled(Button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  background-image: url(${blackArrow});
  background-size: 34px 34px;
  background-repeat: no-repeat;
  background-position: center;
  transform: rotate(${props => props.isOpen ? "180deg" : "0"});

  ${FlexWrapper}:hover > & {
    background-color: ${({ theme }) => theme.colors.main.black};
    background-image: url(${whiteArrow});
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.main.black};
    background-image: url(${whiteArrow});
  }
`

export const ButtonVideo = styled(Button)`
  width: 53px;
  height: 53px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.main.white};
  background-image: url(${blackPlay});
  background-repeat: no-repeat;
  background-position: 55% 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.blue};
    background-image: url(${whitePlay});
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.button.darkBlue};
    background-image: url(${whitePlay});
  }
`

export const ButtonClosePopup = styled(Button)`
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`