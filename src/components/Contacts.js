import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H2 } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { TextSpanWithImage } from "../assets/styles/StyledSpan";
import SocialLinksContacts from "./SocialLinksContacts";
import decoration1 from '../assets/images/contacts_decoration_1.svg';
import decoration2 from '../assets/images/contacts_decoration_2.png';

function Contacts() {
  return (
    <SectionWrapper margin='XL' >
      <FlexWrapper
        direction="column"
        gap="40px"
        align="center"
      >
        <H2
          as="h2"
          spacing="-1px"
        >
          Если остались вопросы, мы на связи
        </H2>
        <FlexWrapper
          direction="row"
          gap="35px"
          justify="center"
        >
          <TextSpanWithImage
            margin="21px 0 0"
            width="83px"
            height="74px"
            hideOnMobile
          >
            <img src={decoration1} alt="декорация текста" />
          </TextSpanWithImage>
          <SocialLinksContacts />
          <TextSpanWithImage
            margin="21px 0 0"
            width="79px"
            height="67px"
            hideOnMobile
          >
            <img src={decoration2} alt="декорация текста" />
          </TextSpanWithImage>
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default Contacts;