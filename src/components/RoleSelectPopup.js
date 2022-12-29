import { useEffect, useState } from 'react';
import { FlexWrapper } from '../assets/styles/FlexWrapper';
import { TextRadio, TextRadioSmall, TextExtraSmall } from '../assets/styles/Text';
import { ButtonRadioSBlack } from '../assets/styles/Radio';
import RadioButton from "./RadioButton";

function RoleSelectPopup({ getInputValue }) {
  const [selectedRole, setSelectedRole] = useState('mentor');

  useEffect(() => {
    getInputValue('role', selectedRole);
  }, [selectedRole]);

  function handleChange(evt) {
    setSelectedRole(evt.target.value);
  }

  return (
    <FlexWrapper
      direction="column"
      gap="10px"
    >
      <FlexWrapper
        hideOnMobile
      >
        <TextRadio>
          Выберите роль
        </TextRadio>
      </FlexWrapper>
      <FlexWrapper
        hideOnDesktop
      >
        <TextExtraSmall>
          Выберите роль
        </TextExtraSmall>
      </FlexWrapper>
      <FlexWrapper
        as="fieldset"
        direction="row"
        gap="4px"
      >
        <RadioButton
          Button={ButtonRadioSBlack}
          TextElement={TextRadioSmall}
          name="role"
          id="role-mentor-popup"
          value="mentor"
          text="Наставник"
          checked={selectedRole === 'mentor'}
          handleChange={handleChange}
        />
        <RadioButton
          Button={ButtonRadioSBlack}
          TextElement={TextRadioSmall}
          name="role"
          id="role-reviewer-popup"
          value="reviewer"
          text="Ревьюер"
          checked={selectedRole === 'reviewer'}
          handleChange={handleChange}
        />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default RoleSelectPopup;