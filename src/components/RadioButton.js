import { InputRadioHidden } from '../assets/styles/Radio';
import { FlexWrapper } from '../assets/styles/FlexWrapper';

function RadioButton({ name, value, id, TextElement, text, Button, handleChange, defaultChecked = false }) {
  return (
    <FlexWrapper>
      <InputRadioHidden
        value={value}
        name={name}
        id={id}
        defaultChecked={defaultChecked}
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