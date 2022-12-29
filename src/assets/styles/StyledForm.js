import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0;
  padding: 40px 90px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.main.white};
  border: 0;
  border-radius: 60px;
  position: relative;
  display: grid;
  grid-template-columns: 384px;
  grid-template-rows: auto 30px auto 30px 60px;
  grid-template-areas:
    "title"
    "."
    "inputs"
    "."
    "button";

  @media screen and (max-width: 767px) {
    border-radius: 20px;
    padding: 40px 15px 25px;
    grid-template-columns: 285px;
    grid-template-rows: auto 25px auto 10px 50px;
  }
`