import { FlexWrapper } from '../assets/styles/FlexWrapper';
import { ButtonRadioM } from '../assets/styles/Radio';
import { TextRadio } from '../assets/styles/Text';
import RadioButton from "./RadioButton";

function RoleSelect({ selected, handleSelectedChange }) {
  return (
    <FlexWrapper
      as="fieldset"
      direction="row"
      gap="8px"
    >
      <RadioButton
        Button={ButtonRadioM}
        TextElement={TextRadio}
        name="roleSelect"
        id="role-mentor"
        value="mentor"
        text="Наставник"
        checked={selected === "mentor"}
        handleChange={handleSelectedChange}
      />
      <RadioButton
        Button={ButtonRadioM}
        TextElement={TextRadio}
        name="roleSelect"
        id="role-reviewer"
        value="reviewer"
        text="Ревьюер"
        checked={selected === "reviewer"}
        handleChange={handleSelectedChange}
      />
    </FlexWrapper>
  );
}

export default RoleSelect;