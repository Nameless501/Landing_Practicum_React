import styled from "styled-components";

export const CardImage = styled.img.attrs(props => ({
  src: props.src,
  alt: 'Фото',
}))`
  margin: 0;
  padding: 0;
  display: block;
  object-fit: cover;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
`