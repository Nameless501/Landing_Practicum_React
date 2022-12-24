import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    max-width: 375px;
  }
`