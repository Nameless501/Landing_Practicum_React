import styled from "styled-components";

export const Divider = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 2px;
  box-sizing: border-box;
  border-top: 2px solid ${({theme}) => theme.colors.main.gray}
`