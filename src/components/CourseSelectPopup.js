import { FlexWrapper } from '../assets/styles/FlexWrapper';
import { ButtonRadioXS } from '../assets/styles/Radio';
import { TextRadio, TextRadioSmall } from '../assets/styles/Text';
import RadioButton from "./RadioButton";

function CourseSelectPopup() {
  return (
    <FlexWrapper
      direction="column"
      gap="10px"
    >
      <TextRadio>
        Выберите направление
      </TextRadio>
      <FlexWrapper
        as="fieldset"
        direction="row"
        gap="10px 4px"
        wrap="wrap"
      >
        <RadioButton
          Button={ButtonRadioXS}
          TextElement={TextRadioSmall}
          name="course-popup"
          id="course-programming-popup"
          value="programming"
          text="Программирование"
          defaultChecked
        />
        <RadioButton
          Button={ButtonRadioXS}
          TextElement={TextRadioSmall}
          name="course-popup"
          id="course-analytics-popup"
          value="analytics"
          text="Аналитика"
        />
        <RadioButton
          Button={ButtonRadioXS}
          TextElement={TextRadioSmall}
          name="course-popup"
          id="course-design-popup"
          value="design"
          text="Дизайн"
        />
        <RadioButton
          Button={ButtonRadioXS}
          TextElement={TextRadioSmall}
          name="course-popup"
          id="course-marketing-popup"
          value="marketing"
          text="Маркетинг"
        />
        <RadioButton
          Button={ButtonRadioXS}
          TextElement={TextRadioSmall}
          name="course-popup"
          id="course-management-popup"
          value="management"
          text="Менеджмент"
        />
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default CourseSelectPopup;