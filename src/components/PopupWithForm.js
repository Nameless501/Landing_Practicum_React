import { TextRegularBold, TextSmall } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import FormInput from "./FormInput";
import PopupContactsTypeSelect from "./PopupContactsTypeSelect";
import RoleSelectPopup from "./RoleSelectPopup";
import CourseSelectPopup from "./CourseSelectPopup";
import { ButtonPrimary, ButtonClosePopup } from "../assets/styles/Button";
import { InputCheckbox } from "../assets/styles/Checkbox";
import { LabelRadio } from "../assets/styles/Radio";

function PopupWithForm({ handleClose }) {
  return (
    <FlexWrapper
      as="form"
      direction="column"
      padding="40px 90px"
      color="white"
      radius="60px"
      maxWidth="600px"
      gap="25px"
      position="relative"
    >
      <TextRegularBold
        align="center"
      >
        Расскажите нам о себе и мы сохраним ваши данные
      </TextRegularBold>
      <FlexWrapper
        direction="column"
      >
        <FormInput
          type="text"
          name="name"
          placeholder="Имя"
          minLength="2"
          maxLength="30"
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
        />
        <PopupContactsTypeSelect />
      </FlexWrapper>
      <RoleSelectPopup />
      <CourseSelectPopup />
      <FlexWrapper
        direction="column"
      >
        <FormInput
          type="url"
          name="url"
          placeholder="Ссылка на резюме"
        />
        <FlexWrapper
          direction="row"
          gap="10px"
          maxWidth="400px"
        >
          <InputCheckbox
            name="contact-checkbox"
            id="contact-checkbox"
            value="agree"
          />
          <LabelRadio
            id="contact-telegram"
          >
            Даю согласие на обработку персональных данных
          </LabelRadio>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        margin="0 auto"
      >
        <ButtonPrimary
          type="submit"
        >
          <TextSmall white>
            Отправить
          </TextSmall>
        </ButtonPrimary>
      </FlexWrapper>
      <ButtonClosePopup
        type="reset"
        onClick={handleClose}
      />
    </FlexWrapper>
  );
}

export default PopupWithForm;