import styled from "styled-components";

export const CardImage = styled.img.attrs(props => ({
  src: props.src,
  alt: 'Фото',
}))`
  margin: 0;
  padding: 0;
  display: block;
  object-fit: cover;
  width: ${(props) => props.width ? props.width : "100%"};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};

  @media screen and (max-width: 767px) {
    width: ${(props) => props.widthMobile ? props.widthMobile : "100%"};
    height: ${(props) => props.heightMobile};
    border-radius: ${(props) => props.radiusMobile};
  }
`