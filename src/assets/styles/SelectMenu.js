import styled from "styled-components";

export const SelectMenuInput = styled.div`
  margin: 0;
  padding: 0 16px 0 12px;
  width: 384px;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.isActive ?
    props.theme.colors.button.secondary : props.theme.colors.service.neytral
  };
  border-radius: 14px;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 285px;
    height: 46px;
  }
`

export const SelectMenuOptions = styled.div`
  margin: 0;
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  width: 200px;
  box-sizing: border-box;
  box-shadow: 0px 1px 12px 2px rgba(36, 36, 36, 0.07);
  background-color: ${({ theme }) => theme.colors.main.white};
  border-radius: 12px;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-100%);
  z-index: 1;

  @media screen and (max-width: 767px) {
  }
`