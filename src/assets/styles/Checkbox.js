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
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.button.secondary};
  border-radius: 6px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.service.neytral};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.button.secondary};
    background-image: url(${radioChecked});
    background-position: center;
    background-size: 12px 9px;
    background-repeat: no-repeat;
  }
`