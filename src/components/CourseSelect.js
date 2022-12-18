import { FlexWrapper } from '../assets/styles/FlexWrapper';
import RadioButton from "./RadioButton";

function CourseSelect() {
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
      />
      <RadioButton
        size="S"
        name="course"
        id="course-analytics"
        value="analytics"
        text="Аналитика"
      />
      <RadioButton
        size="S"
        name="course"
        id="course-design"
        value="design"
        text="Дизайн"
      />
      <RadioButton
        size="S"
        name="course"
        id="course-marketing"
        value="marketing"
        text="Маркетинг"
      />
      <RadioButton
        size="S"
        name="course"
        id="course-management"
        value="management"
        text="Менеджмент"
      />
    </FlexWrapper>
  );
}

export default CourseSelect;