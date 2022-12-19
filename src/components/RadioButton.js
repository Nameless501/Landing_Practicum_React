import { InputRadio, ButtonRadioM, ButtonRadioS } from '../assets/styles/Radio';
import { TextRadio } from '../assets/styles/Text';
import { FlexWrapper } from '../assets/styles/FlexWrapper';

function RadioButton({ name, value, id, text, size, handleChange, defaultChecked=false }) {
  return (
    <FlexWrapper>
      <InputRadio
        value={value}
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      />
      {
        size === "M" ?
          (<ButtonRadioM id={id}>
            <TextRadio >
              {text}
            </TextRadio>
          </ButtonRadioM>)
          :
          size === "S" ?
            (<ButtonRadioS id={id}>
              <TextRadio >
                {text}
              </TextRadio>
            </ButtonRadioS>)
            :
            ''
      }
    </FlexWrapper>
  );
}

export default RadioButton;