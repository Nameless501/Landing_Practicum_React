import styled from "styled-components";

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