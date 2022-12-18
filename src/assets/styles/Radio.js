import styled from "styled-components";

export const InputRadio = styled.input.attrs(props => ({
  type: "radio",
  name: props.name,
  id: props.id,
  value: props.value,
}))`
  margin: 0;
  padding: 0;
  display: none;
`

export const ButtonRadio = styled.label.attrs(props => ({
  htmlFor: props.id,
}))`
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  display: block;
  width: fit-content;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const ButtonRadioM = styled(ButtonRadio)`
  padding: 0 24px;
  height: 50px;
  border-radius: 14px;
  color: ${({ theme }) => theme.colors.main.black};

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.lightGray};
  }

  ${InputRadio}:checked + &{
    background-color: ${({ theme }) => theme.colors.button.secondary};
    color: ${({ theme }) => theme.colors.main.white};
  }
`

export const ButtonRadioS = styled(ButtonRadio)`
  padding: 0 16px;
  height: 36px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.main.black};

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  ${InputRadio}:checked + &{
    background-color: ${({ theme }) => theme.colors.main.white};
  }
`