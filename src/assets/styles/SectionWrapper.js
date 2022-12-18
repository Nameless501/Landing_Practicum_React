import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 0 auto;
  margin-top: ${
    props => props.margin ? props.theme.margins[props.margin] : '0'
  };
  padding: 0;
  max-width: ${({ theme }) => theme.section.width};
  box-sizing: border-box;
`