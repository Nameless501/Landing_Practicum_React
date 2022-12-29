import { useEffect, useState } from 'react';
import { FlexWrapper } from '../assets/styles/FlexWrapper';
import { ButtonRadioXS } from '../assets/styles/Radio';
import { TextRadio, TextRadioSmall } from '../assets/styles/Text';
import CourseSelectMenu from './CourseSelectMenu';
import RadioButton from "./RadioButton";

function CourseSelectPopup({ getInputValue }) {
  const [selectedCourse, setSelectedCourse] = useState('programming');

  useEffect(() => {
    getInputValue('course', selectedCourse)
  }, [selectedCourse]);

  function handleChange(evt) {
    setSelectedCourse(evt.target.value);
  }

  return (
    <>
      <FlexWrapper
        direction="column"
        gap="10px"
        hideOnMobile
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
            name="course"
            id="course-programming-popup"
            value="programming"
            text="Программирование"
            checked={selectedCourse === 'programming'}
            handleChange={handleChange}
          />
          <RadioButton
            Button={ButtonRadioXS}
            TextElement={TextRadioSmall}
            name="course"
            id="course-analytics-popup"
            value="analytics"
            text="Аналитика"
            checked={selectedCourse === 'analytics'}
            handleChange={handleChange}
          />
          <RadioButton
            Button={ButtonRadioXS}
            TextElement={TextRadioSmall}
            name="course"
            id="course-design-popup"
            value="design"
            text="Дизайн"
            checked={selectedCourse === 'design'}
            handleChange={handleChange}
          />
          <RadioButton
            Button={ButtonRadioXS}
            TextElement={TextRadioSmall}
            name="course"
            id="course-marketing-popup"
            value="marketing"
            text="Маркетинг"
            checked={selectedCourse === 'marketing'}
            handleChange={handleChange}
          />
          <RadioButton
            Button={ButtonRadioXS}
            TextElement={TextRadioSmall}
            name="course"
            id="course-management-popup"
            value="management"
            text="Менеджмент"
            checked={selectedCourse === 'management'}
            handleChange={handleChange}
          />
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        hideOnDesktop
      >
        <CourseSelectMenu
          selectedCourse={selectedCourse}
          handleChange={handleChange}
        />
      </FlexWrapper>
    </>
  );
}

export default CourseSelectPopup;