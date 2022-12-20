import styled from "styled-components";

export const StyledInput = styled.input.attrs(props => ({
  type: props.type,
  name: props.name,
  placeholder: props.placeholder,
  minLength: props.minLength,
  maxLength: props.maxLength,
  required: props.required ? true : false,
}))`
  margin: 0;
  padding: 0 12px 0 16px;
  width: 384px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.service.neytral};
  border-radius: 14px;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.button.secondary};
  }

  &:placeholder {
    color: ${({ theme }) => theme.colors.main.darkGray};
    font-family: ${({ theme }) => theme.fonts.family.radio};
    font-weight: ${({ theme }) => theme.fonts.weight.radio};
    font-size: ${({ theme }) => theme.fonts.size.radio};
    line-height: ${({ theme }) => theme.fonts.lineHeight.radio};
  }
`