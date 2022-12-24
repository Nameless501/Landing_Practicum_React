import { TextLarge, TextRegular, TextExtraSmall } from "../assets/styles/Text";
import { ButtonSecondarySmall } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";

function NoAvailableVacancies({ handleOpen }) {
  return (
    <>
      <FlexWrapper
        margin="50px 0 0"
        padding="44px 50px"
        maxWidth="100%"
        color="blue"
        radius="40px"
        justify="space-between"
        align="center"
        hideOnMobile
      >
        <FlexWrapper
          direction="column"
          gap="15px"
          maxWidth="730px"
        >
          <TextLarge white >
            Предложений пока нет
          </TextLarge>
          <TextRegular white >
            Расскажите нам о себе и мы сохраним ваши данные для возможного сотрудничества в будущем
          </TextRegular>
        </FlexWrapper>
        <ButtonSecondarySmall
          onClick={handleOpen}
        >
          <TextExtraSmall>
            Рассказать о себе
          </TextExtraSmall>
        </ButtonSecondarySmall>
      </FlexWrapper>


      <FlexWrapper
        margin="20px 0 0"
        padding="30px 20px 40px"
        maxWidth="100%"
        color="blue"
        radius="30px"
        justify="space-between"
        align="center"
        direction="column"
        gap="30px"
        hideOnDesktop
      >
        <FlexWrapper
          direction="column"
          gap="10px"
          maxWidth="275px"
        >
          <TextLarge white >
            Предложений пока нет
          </TextLarge>
          <TextRegular white >
            Расскажите нам о себе и мы сохраним ваши данные для возможного сотрудничества в будущем
          </TextRegular>
        </FlexWrapper>
        <ButtonSecondarySmall
          widthMobile="275px"
          onClick={handleOpen}
        >
          <TextExtraSmall>
            Рассказать о себе
          </TextExtraSmall>
        </ButtonSecondarySmall>
      </FlexWrapper>
    </>
  );
}

export default NoAvailableVacancies;