import { FlexWrapper } from '../assets/styles/FlexWrapper';
import { ButtonRadioSWhite } from '../assets/styles/Radio';
import { TextRadio } from '../assets/styles/Text';
import RadioButton from "./RadioButton";

function CourseSelect({ selected, handleSelectedChange }) {
  return (
    <FlexWrapper
      as="fieldset"
      maxWidth="fit-content"
      direction="row"
      padding="6px"
      gap="8px"
      color="lightGray"
      radius="16px"
    >
      <RadioButton
        Button={ButtonRadioSWhite}
        TextElement={TextRadio}
        name="courseSelect"
        id="course-programming"
        value="programming"
        text="Программирование"
        checked={selected === "programming"}
        handleChange={handleSelectedChange}
      />
      <RadioButton
        Button={ButtonRadioSWhite}
        TextElement={TextRadio}
        name="courseSelect"
        id="course-analytics"
        value="analytics"
        text="Аналитика"
        checked={selected === "analytics"}
        handleChange={handleSelectedChange}
      />
      <RadioButton
        Button={ButtonRadioSWhite}
        TextElement={TextRadio}
        name="courseSelect"
        id="course-design"
        value="design"
        text="Дизайн"
        checked={selected === "design"}
        handleChange={handleSelectedChange}
      />
      <RadioButton
        Button={ButtonRadioSWhite}
        TextElement={TextRadio}
        name="courseSelect"
        id="course-marketing"
        value="marketing"
        text="Маркетинг"
        checked={selected === "marketing"}
        handleChange={handleSelectedChange}
      />
      <RadioButton
        Button={ButtonRadioSWhite}
        TextElement={TextRadio}
        name="courseSelect"
        id="course-management"
        value="management"
        text="Менеджмент"
        checked={selected === "management"}
        handleChange={handleSelectedChange}
      />
    </FlexWrapper>
  );
}

export default CourseSelect;