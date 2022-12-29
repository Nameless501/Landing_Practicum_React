import styled from "styled-components";
import radioChecked from '../images/radio_checked.svg';

export const InputCheckbox = styled.input.attrs(props => ({
  type: "checkbox",
  name: props.name,
  id: props.id,
  value: props.value,
  required: props.required ? true : false,
}))`
  margin: 0;
  padding: 0;
  appearance: none;
  width: 20px;
  min-width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.button.secondary};
  border-radius: 6px;
  vertical-align: middle;

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
    background-size: 12px 9px;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 767px) {
    width: 16px;
    min-width: 16px;
    height: 16px;
  }
`

export const LabelCheckbox = styled.label.attrs(props => ({
  htmlFor: props.id,
}))`
  font-family: ${({ theme }) => theme.fonts.family.radio};
  font-weight: ${({ theme }) => theme.fonts.weight.radio};
  font-size: ${({ theme }) => theme.fonts.size.radio};
  line-height: ${({ theme }) => theme.fonts.lineHeight.radio};
  vertical-align: middle;

  @media screen and (min-width: 1024px) {
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 767px) {
    font-weight: ${({ theme }) => theme.fonts.weight.radioSmall};
    font-size: ${({ theme }) => theme.fonts.size.radioSmall};
    line-height: ${({ theme }) => theme.fonts.lineHeight.radioSmall};
    letter-spacing: -0.5px;
  }
`