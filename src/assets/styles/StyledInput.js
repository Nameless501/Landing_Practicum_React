import styled from "styled-components";

export const StyledInput = styled.input.attrs(props => ({
  type: props.type,
  name: props.name,
  value: props.value || '',
  placeholder: props.placeholder,
  minLength: props.minLength,
  maxLength: props.maxLength,
  required: props.required ? true : false,
}))`
  margin: 0;
  padding: 0 12px 0 16px;
  width: 384px;
  height: 50px;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.service[props.state]};
  border-radius: 14px;

  @media screen and (max-width: 767px) {
    width: 285px;
    height: 46px;
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.state === 'neytral' ?
      props.theme.colors.button.secondary : props.theme.colors.service[props.state]
    };
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.main.darkGray};
    font-family: ${({ theme }) => theme.fonts.family.radio};
    font-weight: ${({ theme }) => theme.fonts.weight.radio};
    font-size: ${({ theme }) => theme.fonts.size.radio};
    line-height: ${({ theme }) => theme.fonts.lineHeight.radio};
  }
`