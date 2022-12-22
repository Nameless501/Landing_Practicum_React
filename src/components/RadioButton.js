import { InputRadioHidden } from '../assets/styles/Radio';
import { FlexWrapper } from '../assets/styles/FlexWrapper';

function RadioButton({ name, value, id, TextElement, text, Button, handleChange, checked = false }) {
  return (
    <FlexWrapper>
      <InputRadioHidden
        value={value}
        name={name}
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <Button id={id}>
          <TextElement>
            {text}
          </TextElement>
      </Button>
    </FlexWrapper>
  );
}

export default RadioButton;