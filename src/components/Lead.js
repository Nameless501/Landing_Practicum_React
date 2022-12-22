import { Link } from 'react-scroll';
import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H1, TextSmall } from "../assets/styles/Text";
import { ButtonPrimary } from '../assets/styles/Button';
import { TextSpanWithImage, TextSpan } from "../assets/styles/StyledSpan";
import decoration1 from '../assets/images/text_decoration_1.png';
import decoration2 from '../assets/images/text_bullet_1.svg';
import decoration3 from '../assets/images/text_decoration_2.svg';

function Lead() {
  return (
    <SectionWrapper margin='L' >
      <H1 as='h1' >
        Делись знаниями,
        <TextSpanWithImage
          width="190px"
          height="99px"
          margin='0 0 0 10px'
          align="baseline"
        >
          <img src={decoration1} alt='декорация текста' />
        </TextSpanWithImage>
        <br />
        расти в&nbsp;профессии и&nbsp;делай
        <TextSpanWithImage
          width="90px"
          height="90px"
          margin='0 10px -18px 0'
          align="middle"
          >
          <img src={decoration2} alt='декорация текста' />
        </TextSpanWithImage>
        мир лучше
        <TextSpan
          align="middle"
          margin='0 0 0 30px'
        >
          <ButtonPrimary
            as={Link}
            to="vacancies"
          >
            <TextSmall white>
              Хочу делиться знаниями
            </TextSmall>
          </ButtonPrimary>
        </TextSpan>
        <TextSpanWithImage
          width="147px"
          height="124px"
          margin='10px 0 0 30px'
          align="top"
          >
          <img src={decoration3} alt='декорация текста' />
        </TextSpanWithImage>
      </H1>
    </SectionWrapper>
  );
}

export default Lead;