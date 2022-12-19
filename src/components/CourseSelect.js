import { FlexWrapper } from '../assets/styles/FlexWrapper';
import RadioButton from "./RadioButton";

function CourseSelect({ handleSelectedChange }) {
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
        size="S"
        name="course"
        id="course-programming"
        value="programming"
        text="Программирование"
        defaultChecked
        handleChange={handleSelectedChange}
      />
      <RadioButton
        size="S"
        name="course"
        id="course-analytics"
        value="analytics"
        text="Аналитика"
        handleChange={handleSelectedChange}
      />
      <RadioButton
        size="S"
        name="course"
        id="course-design"
        value="design"
        text="Дизайн"
        handleChange={handleSelectedChange}
      />
      <RadioButton
        size="S"
        name="course"
        id="course-marketing"
        value="marketing"
        text="Маркетинг"
        handleChange={handleSelectedChange}
      />
      <RadioButton
        size="S"
        name="course"
        id="course-management"
        value="management"
        text="Менеджмент"
        handleChange={handleSelectedChange}
      />
    </FlexWrapper>
  );
}

export default CourseSelect;