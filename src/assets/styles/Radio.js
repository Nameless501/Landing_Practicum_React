import styled from "styled-components";
import radioChecked from '../images/radio_checked.svg';

export const InputRadio = styled.input.attrs(props => ({
  type: "radio",
  name: props.name,
  id: props.id,
  value: props.value,
}))`
  margin: 0;
  padding: 0;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1.5px solid ${({ theme }) => theme.colors.button.secondary};
  border-radius: 100px;

  @media screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.service.neytral};
    }
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.button.secondary};
    background-image: url(${radioChecked});
    background-position: center;
    background-size: 9px 6.75px;
    background-repeat: no-repeat;
  }
`

export const InputRadioHidden = styled(InputRadio)`
  display: none;
`

export const LabelRadio = styled.label.attrs(props => ({
  htmlFor: props.id,
}))`
  font-family: ${({ theme }) => theme.fonts.family.radio};
  font-weight: ${({ theme }) => theme.fonts.weight.radio};
  font-size: ${({ theme }) => theme.fonts.size.radio};
  line-height: ${({ theme }) => theme.fonts.lineHeight.radio};

  &:hover {
    cursor: pointer;
  }
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

  ${InputRadio}:checked + & {
    background-color: ${({ theme }) => theme.colors.button.secondary};
    color: ${({ theme }) => theme.colors.main.white};
  }

  ${InputRadio}:checked + & {
    background-color: ${({ theme }) => theme.colors.button.secondary};
    color: ${({ theme }) => theme.colors.main.white};
  }
`

export const ButtonRadioSWhite = styled(ButtonRadio)`
  padding: 0 16px;
  height: 36px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.main.black};

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  ${InputRadio}:checked + & {
    background-color: ${({ theme }) => theme.colors.main.white};
  }
`

export const ButtonRadioSBlack = styled(ButtonRadioSWhite)`
  color: ${({ theme }) => theme.colors.main.black};

  ${InputRadio}:checked + & {
    background-color: ${({ theme }) => theme.colors.main.black};
    color: ${({ theme }) => theme.colors.main.white};
  }
`

export const ButtonRadioXS = styled(ButtonRadio)`
  padding: 0 16px;
  height: 32px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.main.black};

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  ${InputRadio}:checked + & {
    background-color: ${({ theme }) => theme.colors.button.secondary};
    color: ${({ theme }) => theme.colors.main.white};
  }
`
export const ButtonRadioSelect = styled(ButtonRadio)`
  padding: 0 12px;
  height: 40px;
  width: 100%;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.main.black};
  display: flex;
  justify-content: flex-start;

  ${InputRadio}:checked + & {
    background-color: ${({ theme }) => theme.colors.main.gray};
  }

  & > p {
    text-align: start;
  }
`