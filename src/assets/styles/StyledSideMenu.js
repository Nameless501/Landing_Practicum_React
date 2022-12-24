import styled from "styled-components";

export const StyledSideMenu = styled.div`
  margin: 0;
  padding: 74px 0 70px;
  width: 305px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  background-color: ${({ theme }) => theme.colors.main.white};
  border: 0;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`