import { FlexWrapper } from '../assets/styles/FlexWrapper';
import RadioButton from "./RadioButton";

function RoleSelect() {
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
      />
      <RadioButton
        size="M"
        name="role"
        id="role-reviewer"
        value="reviewer"
        text="Ревьюер"
      />
    </FlexWrapper>
  );
}

export default RoleSelect;