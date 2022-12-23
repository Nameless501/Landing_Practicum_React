import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { TextLarge, TextRegular } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { NavLinkUnderline } from "../assets/styles/Link";
import { TextSpan } from "../assets/styles/StyledSpan";
import SocialLinksFooter from "./SocialLinksFooter";
import NavigationBarFooter from "./NaigationBarFooter";

function Footer() {
  return (
    <SectionWrapper
      as="footer"
      margin='XXL'
      padding="80px 120px 120px"
      maxWidth="100%"
      radius="40px 40px 0px 0px"
      color="lightGray"
    >
      <FlexWrapper
        direction="row"
        gap="160px"
      >
        <FlexWrapper
          direction="column"
          gap="50px"
        >
          <FlexWrapper
            direction="column"
          >
            <TextLarge>
              8-800-700-93-29
            </TextLarge>
            <TextRegular>
              Звонок по России бесплатный
            </TextRegular>
          </FlexWrapper>
          <SocialLinksFooter />
          <TextRegular>
            &copy; 2022 АНО ДПО «ШАД», ООО «Яндекс»
          </TextRegular>
        </FlexWrapper>
        <FlexWrapper
          direction="column"
          gap="75px"
          maxWidth="590px"
        >
          <NavigationBarFooter />
          <FlexWrapper
            direction="column"
            gap="25px"
          >
            <TextRegular gray >
              Информация на данной странице описывает возможные варианты получения дополнительного дохода в месяц
              (т.н. подработка). Не является предложением о работе. Размещенные объявления о потребности в тех или
              иных услугах не являются вакансиями.
            </TextRegular>
            <TextRegular gray >
              Образовательные услуги оказываются АНО ДПО «ШАД». ШАД — это&nbsp;
              <TextSpan>
                <NavLinkUnderline>
                  Школа анализа данных
                </NavLinkUnderline>
              </TextSpan>
              , основанная Яндексом и оказывающая образовательные услуги на основании
              <TextSpan>
                <NavLinkUnderline>
                  Лицензии № 036031
                </NavLinkUnderline>
              </TextSpan>
              &nbsp; от 24 марта 2015 года.
            </TextRegular>
            <TextRegular gray>
              Сертификат о прохождении обучения по программе дополнительного профессионального образования
              также выдается АНО ДПО «ШАД».
            </TextRegular>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default Footer;