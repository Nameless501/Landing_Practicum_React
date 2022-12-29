import { useState } from "react";
import { StyledInputIcon } from "../assets/styles/StyledInputIcon";
import imageSelectArrow from "../assets/images/select_arrow.svg";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { SelectMenuInput, SelectMenuOptions } from "../assets/styles/SelectMenu";
import { TextRadio } from "../assets/styles/Text";
import { ButtonRadioSelect } from "../assets/styles/Radio";
import RadioButton from "./RadioButton";

function CourseSelectMenu({ selectedCourse, handleChange }) {
  const [menuIsOpen, setMenuState] = useState(false);

  function toggleSelectMenu() {
    setMenuState(current => !current);
  }

  function handleChangeAndClose(evt) {
    handleChange(evt);
    toggleSelectMenu();
  }

  return (
    <FlexWrapper
      position="relative"
    >
      <SelectMenuInput
        isActive={menuIsOpen}
        onClick={toggleSelectMenu}
      >
        {selectedCourse &&
          <TextRadio>
            {selectedCourse === "programming" && "Программирование"}
            {selectedCourse === "analytics" && "Аналитика"}
            {selectedCourse === "design" && "Дизайн"}
            {selectedCourse === "marketing" && "Маркетинг"}
            {selectedCourse === "management" && "Менеджмент"}
          </TextRadio>
        }
        {!selectedCourse &&
          <TextRadio
            gray
          >
            Ваше направление
          </TextRadio>
        }
        <StyledInputIcon
          image={imageSelectArrow}
        />
      </SelectMenuInput>
      {menuIsOpen &&
        <SelectMenuOptions>
          <RadioButton
            Button={ButtonRadioSelect}
            TextElement={TextRadio}
            name="course"
            id="course-programming-popup-mobile"
            value="programming"
            text="Программирование"
            checked={selectedCourse === 'programming'}
            handleChange={handleChangeAndClose}
          />
          <RadioButton
            Button={ButtonRadioSelect}
            TextElement={TextRadio}
            name="course"
            id="course-analytics-popup-mobile"
            value="analytics"
            text="Аналитика"
            checked={selectedCourse === 'analytics'}
            handleChange={handleChangeAndClose}
          />
          <RadioButton
            Button={ButtonRadioSelect}
            TextElement={TextRadio}
            name="course"
            id="course-design-popup-mobile"
            value="design"
            text="Дизайн"
            checked={selectedCourse === 'design'}
            handleChange={handleChangeAndClose}
          />
          <RadioButton
            Button={ButtonRadioSelect}
            TextElement={TextRadio}
            name="course"
            id="course-marketing-popup-mobile"
            value="marketing"
            text="Маркетинг"
            checked={selectedCourse === 'marketing'}
            handleChange={handleChangeAndClose}
          />
          <RadioButton
            Button={ButtonRadioSelect}
            TextElement={TextRadio}
            name="course"
            id="course-management-popup-mobile"
            value="management"
            text="Менеджмент"
            checked={selectedCourse === 'management'}
            handleChange={handleChangeAndClose}
          />
        </SelectMenuOptions>
      }
    </FlexWrapper>
  );
}

export default CourseSelectMenu;