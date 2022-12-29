import styled from "styled-components";

export const StyledInputIcon = styled.span`
  margin: 0;
  padding: 0;
  display: block;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: transparent;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  @media screen and (max-width: 767px) {

  }
`