import styled from "styled-components";
import whiteArrow from '../images/arrow_white.svg';
import blackArrow from '../images/arrow_black.svg';

export const Button = styled.button`
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: border-box;
  border: 0;
  border-radius: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const ButtonPrimary = styled(Button)`
  width: 315px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  color: ${({ theme }) => theme.colors.main.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.blue};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.button.darkBlue};
  }
`

export const ButtonSecondary = styled(Button)`
  width: 285px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.button.secondary};
  color: ${({ theme }) => theme.colors.main.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.blue};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.button.darkBlue};
  }
`

export const ButtonSecondarySmall = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.main.white};
  color: ${({ theme }) => theme.colors.button.secondary};

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

  &:hover {
    background-color: ${({ theme }) => theme.colors.main.black};
    background-image: url(${whiteArrow});
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.main.black};
    background-image: url(${whiteArrow});
  }
`