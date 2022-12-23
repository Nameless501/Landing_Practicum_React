import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H2, H3 } from "../assets/styles/Text";
import { TextSpanWithImage } from "../assets/styles/StyledSpan";
import { UnorderedList } from '../assets/styles/UnorderedList';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
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
        maxWidth="100%"
      >
        <H2 as="h2" >
          Как стать экспертом
        </H2>
        <UnorderedList
          direction="row"
          justify="space-between"
        >
          <li>
            <FlexWrapper
              maxWidth="387px"
              gap="15px"
            >
              <TextSpanWithImage
                width="40px"
                height="40px"
              >
                <img src={decoration1} alt='декорация текста' />
              </TextSpanWithImage>
              <H3
                as='h3'
                spacing="-0.8px"
              >
                Выберите роль и&nbsp;заполните заявку
              </H3>
            </FlexWrapper>
          </li>
          <li>
            <FlexWrapper
              maxWidth="386px"
              gap="15px"
            >
              <TextSpanWithImage
                width="40px"
                height="40px"
              >
                <img src={decoration2} alt='декорация текста' />
              </TextSpanWithImage>
              <H3
                as='h3'
                spacing="-0.8px"
              >
                Пройдите отбор и&nbsp;бесплатное обучение
              </H3>
            </FlexWrapper>
          </li>
          <li>
            <FlexWrapper
              maxWidth="387px"
              gap="15px"
            >
              <TextSpanWithImage
                width="40px"
                height="40px"
              >
                <img src={decoration3} alt='декорация текста' />
              </TextSpanWithImage>
              <H3
                as='h3'
                spacing="-0.8px"
              >
                Начните&nbsp;делиться знаниями со&nbsp;студентами
              </H3>
            </FlexWrapper>
          </li>
        </UnorderedList>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default HowTo;