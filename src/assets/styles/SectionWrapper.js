import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 0 auto;
  margin-top: ${
    props => props.margin ? props.theme.margins[props.margin] : '0'
  };
  padding: ${
    props => props.padding ? props.padding : '0'
  };
  max-width: ${(props) => props.maxWidth ?
    props.maxWidth : props.theme.section.width
  };
  box-sizing: border-box;
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.theme.colors.main[props.color]};

  @media screen and (max-width: 767px) {
    max-width: ${(props) => props.maxWidth ?
      props.maxWidth : props.theme.section.widthMobile
    };
    margin-top: ${
      props => props.margin ? props.theme.margins.mobile[props.margin] : '0'
    };
  }
`
