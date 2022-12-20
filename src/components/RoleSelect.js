import { FlexWrapper } from '../assets/styles/FlexWrapper';
import { ButtonRadioM } from '../assets/styles/Radio';
import { TextRadio } from '../assets/styles/Text';
import RadioButton from "./RadioButton";

function RoleSelect({ handleSelectedChange }) {
  return (
    <FlexWrapper
      as="fieldset"
      direction="row"
      gap="8px"
    >
      <RadioButton
        Button={ButtonRadioM}
        TextElement={TextRadio}
        name="role"
        id="role-mentor"
        value="mentor"
        text="Наставник"
        defaultChecked
        handleChange={handleSelectedChange}
      />
      <RadioButton
        Button={ButtonRadioM}
        TextElement={TextRadio}
        name="role"
        id="role-reviewer"
        value="reviewer"
        text="Ревьюер"
        handleChange={handleSelectedChange}
      />
    </FlexWrapper>
  );
}

export default RoleSelect;