import { FlexWrapper } from '../assets/styles/FlexWrapper';
import RadioButton from "./RadioButton";

function RoleSelect({ handleSelectedChange }) {
  return (
    <FlexWrapper
      as="fieldset"
      direction="row"
      gap="8px"
    >
      <RadioButton
        size="M"
        name="role"
        id="role-mentor"
        value="mentor"
        text="Наставник"
        defaultChecked
        handleChange={handleSelectedChange}
      />
      <RadioButton
        size="M"
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