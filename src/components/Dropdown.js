import { useState, useRef, useEffect } from "react";
import { TextLarge } from "../assets/styles/Text";
import { ButtonArrow } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";

function Dropdown({ name, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  function toggleOpen() {
    setIsOpen(current => !current);
  }

  function handleClickOutside(evt) {
    if (isOpen && !dropdownRef.current.contains(evt.target)) {
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
      ref={dropdownRef}
    >
      <FlexWrapper
        direction="row"
        padding="22px 0"
        paddingMobile="15px 0"
        justify="space-between"
        align="center"
        gap="20px"
        gapMobile="10px"
        pointer
        onClick={toggleOpen}
      >
        <FlexWrapper
          maxWidth="1120px"
          widthMobile="260px"
        >
          <TextLarge
            spacing="-0.5px"
          >
            {name}
          </TextLarge>
        </FlexWrapper>
        <ButtonArrow
          isOpen={isOpen}
        />
      </FlexWrapper>
      {isOpen && children}
    </FlexWrapper>
  );
}

export default Dropdown;