import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H2, H3 } from "../assets/styles/Text";
import { TextSpanWithImage } from "../assets/styles/StyledSpan";
import { UnorderedList } from '../assets/styles/UnorderedList';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { HowToGridWrapper } from "../assets/styles/GridWrapper";
import decoration1 from '../assets/images/text_bullet_1.svg';
import decoration2 from '../assets/images/text_bullet_2.svg';
import decoration3 from '../assets/images/text_bullet_3.svg';

function HowTo() {
  return (
    <SectionWrapper
      margin='XL'
    >
      <FlexWrapper
        direction="column"
        gap="40px"
      >
        <H2 as="h2" >
          Как стать экспертом
        </H2>
        <HowToGridWrapper>
            <FlexWrapper
              gap="15px"
              area="left"
            >
              <TextSpanWithImage
                width="25px"
                height="25px"
                hideOnDesktop
              >
                <img src={decoration1} alt='декорация текста' />
              </TextSpanWithImage>
              <TextSpanWithImage
                width="40px"
                height="40px"
                hideOnMobile
              >
                <img src={decoration1} alt='декорация текста' />
              </TextSpanWithImage>
              <H3
                as='h3'
              >
                Выберите роль и&nbsp;заполните заявку
              </H3>
            </FlexWrapper>
            <FlexWrapper
              gap="15px"
              area="middle"
            >
              <TextSpanWithImage
                width="25px"
                height="25px"
                hideOnDesktop
              >
                <img src={decoration2} alt='декорация текста' />
              </TextSpanWithImage>
              <TextSpanWithImage
                width="40px"
                height="40px"
                hideOnMobile
              >
                <img src={decoration2} alt='декорация текста' />
              </TextSpanWithImage>
              <H3
                as='h3'
              >
                Пройдите отбор и&nbsp;бесплатное обучение
              </H3>
            </FlexWrapper>
            <FlexWrapper
              gap="15px"
              area="right"
            >
              <TextSpanWithImage
                width="25px"
                height="25px"
                hideOnDesktop
              >
                <img src={decoration3} alt='декорация текста' />
              </TextSpanWithImage>
              <TextSpanWithImage
                width="40px"
                height="40px"
                hideOnMobile
              >
                <img src={decoration3} alt='декорация текста' />
              </TextSpanWithImage>
              <H3
                as='h3'
              >
                Начните&nbsp;делиться знаниями со&nbsp;студентами
              </H3>
            </FlexWrapper>
        </HowToGridWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default HowTo;