import { FlexWrapper } from '../assets/styles/FlexWrapper';
import { TextRadio, TextRadioSmall } from '../assets/styles/Text';
import { ButtonRadioSBlack } from '../assets/styles/Radio';
import RadioButton from "./RadioButton";

function RoleSelectPopup() {
  return (
    <FlexWrapper
      direction="column"
      gap="10px"
      margin="-15px 0 0"
    >
      <TextRadio>
        Выберите роль
      </TextRadio>
      <FlexWrapper
        as="fieldset"
        direction="row"
        gap="4px"
      >
        <RadioButton
          Button={ButtonRadioSBlack}
          TextElement={TextRadioSmall}
          name="role-popup"
          id="role-mentor-popup"
          value="mentor"
          text="Наставник"
          defaultChecked
        />
        <RadioButton
          Button={ButtonRadioSBlack}
          TextElement={TextRadioSmall}
          name="role-popup"
          id="role-reviewer-popup"
          value="reviewer"
          text="Ревьюер"
        />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default RoleSelectPopup;