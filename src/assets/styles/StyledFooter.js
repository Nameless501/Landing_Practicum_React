import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin: 0;
  margin-top: ${({ theme }) => theme.margins.XXL};
  padding: 80px 120px 120px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 40px 40px 0px 0px;
  background-color: ${({ theme }) => theme.colors.main.lightGray};
  display: grid;
  grid-template-columns: 450px 590px;
  grid-template-rows: 75px 50px 35px 50px max-content;
  grid-template-areas:
    "phone links"
    ". links"
    "social links"
    ". ."
    "name info";
  column-gap: 160px;

  @media screen and (max-width: 767px) {
    margin-top: ${({ theme }) => theme.margins.mobile.XXL};
    padding: 40px 30px 60px;
    grid-template-columns: 315px;
    grid-template-rows: repeat(5, max-content);
    grid-template-areas:
      "phone"
      "social"
      "links"
      "info"
      "name";
    gap: 40px 0;
  }
`