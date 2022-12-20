import styled from "styled-components";
import { LinkFlexWrapper } from "./FlexWrapper";

export const StyledIcon = styled.svg.attrs(props => ({
  width: props.width,
  height: props.height,
  viewBox: props.viewBox,
}))`
  margin: 0;
  padding: 0;

  &:hover > .styled-path {
    fill: ${({ theme }) => theme.colors.main.blue};
  }

  &:active > .styled-path {
    fill: ${({ theme }) => theme.colors.button.darkBlue};
  }

  ${LinkFlexWrapper}:hover & > .styled-path {
    fill: ${({ theme }) => theme.colors.main.blue};
  }

  ${LinkFlexWrapper}:active & > .styled-path {
    fill: ${({ theme }) => theme.colors.button.darkBlue};
  }
`