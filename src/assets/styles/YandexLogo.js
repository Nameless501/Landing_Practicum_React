import styled from "styled-components";
import logo from '../images/yandex_logo.svg';

export const YandexLogo = styled.img.attrs(props => ({
  src: logo,
  alt: 'yandex logo',
}))`
  margin: 0;
  padding: 0;
  display: block;
  width: 159px;
  height: 29px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    width: 150px;
    height: 25px;
  }
`