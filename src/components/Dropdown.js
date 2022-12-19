import { useState, useRef, useEffect } from "react";
import { TextLarge } from "../assets/styles/Text";
import { ButtonArrow } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";

function Dropdown({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef();

  function toggleOpen() {
    setIsOpen(current => !current);
  }

  function handleClickOutside(evt) {
    if (isOpen && !dropdown.current.contains(evt.target)) {
      toggleOpen();
      window.removeEventListener('click', handleClickOutside);
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <FlexWrapper
      direction="column"
      ref={dropdown}
    >
      <FlexWrapper
        direction="row"
        padding="24px 0"
        justify="space-between"
        align="center"
        pointer
        onClick={toggleOpen}
      >
        <TextLarge>
          {name}
        </TextLarge>
        <ButtonArrow
          isOpen={isOpen}
        />
      </FlexWrapper>
      {isOpen && children}
    </FlexWrapper>
  );
}

export default Dropdown;