import styled from "styled-components";

export const StyledIFrame = styled.iframe.attrs(props => ({
  title: "Видео с отзывом",
  src: props.src,
  frameborder: 0,
  allowfullscreen: true,
  allow: "autoplay; picture-in-picture; fullscreen;"
}))`
  margin: 0;
  padding: 0;
  border: none;
  display: block
  object-position: center;
  border: 0;
  width: 70vw;
  min-height: 500px;

  @media screen and (max-width: 767px) {
    width: 80vw;
    min-height: 200px;
  }
`