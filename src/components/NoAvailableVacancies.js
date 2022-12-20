import { TextLarge, TextRegular, TextExtraSmall } from "../assets/styles/Text";
import { ButtonSecondarySmall } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";

function NoAvailableVacancies({ handleOpen }) {
  return (
    <FlexWrapper
      margin="50px 0 0"
      padding="44px 50px"
      maxWidth="100%"
      color="blue"
      radius="40px"
      justify="space-between"
      align="center"
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
  );
}

export default NoAvailableVacancies;