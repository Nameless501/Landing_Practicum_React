import { Link } from 'react-scroll';
import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { FlexWrapper } from '../assets/styles/FlexWrapper';
import { H1, TextSmall, TextLarge } from "../assets/styles/Text";
import { ButtonPrimary } from '../assets/styles/Button';
import { TextSpanWithImage, TextSpan } from "../assets/styles/StyledSpan";
import decoration1 from '../assets/images/text_decoration_1.png';
import decoration2 from '../assets/images/text_bullet_1.svg';
import decoration3 from '../assets/images/text_decoration_2.svg';

function Lead() {
  return (
    <SectionWrapper
      margin='L'
    >
      <FlexWrapper
        direction="column"
        gap="40px"
      >
        <H1
          as='h1'
          spacing="-1px"
        >
          Делись
          <TextSpanWithImage
            width="130px"
            height="68px"
            margin='0 0 0 5px'
            align="baseline"
            hideOnDesktop
          >
            <img src={decoration1} alt='декорация текста' />
          </TextSpanWithImage>
          знаниями,
          <TextSpanWithImage
            width="190px"
            height="99px"
            margin='0 0 0 10px'
            align="baseline"
            hideOnMobile
          >
            <img src={decoration1} alt='декорация текста' />
          </TextSpanWithImage>
          <br />
          расти
          <TextSpanWithImage
            width="63px"
            height="63px"
            margin='0 0 0 5px'
            align="middle"
            hideOnDesktop
          >
            <img src={decoration2} alt='декорация текста' />
          </TextSpanWithImage>
          в&nbsp;профессии и&nbsp;делай
          <TextSpanWithImage
            width="90px"
            height="90px"
            margin='0 0 -18px'
            align="middle"
            hideOnMobile
          >
            <img src={decoration2} alt='декорация текста' />
          </TextSpanWithImage>
          &nbsp;мир лучше
          <TextSpan
            align="middle"
            margin='0 0 0 30px'
            hideOnMobile
          >
            <ButtonPrimary
              as={Link}
              to="vacancies"
            >
              <TextSmall>
                Хочу делиться знаниями
              </TextSmall>
            </ButtonPrimary>
          </TextSpan>
          <TextSpanWithImage
            width="147px"
            height="124px"
            margin='10px 0 0 30px'
            align="top"
            hideOnMobile
          >
            <img src={decoration3} alt='декорация текста' />
          </TextSpanWithImage>
          <TextSpanWithImage
            width="82px"
            height="71px"
            margin='0 0 0 15px'
            align="top"
            hideOnDesktop
          >
            <img src={decoration3} alt='декорация текста' />
          </TextSpanWithImage>
        </H1>
        <FlexWrapper
          hideOnDesktop
        >
          <ButtonPrimary
            as={Link}
            to="vacancies"
          >
            <TextLarge>
              Хочу делиться знаниями
            </TextLarge>
          </ButtonPrimary>
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default Lead;