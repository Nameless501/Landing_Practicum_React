import { useEffect } from "react";
import { PopupSectionWrapper } from "../assets/styles/PopupSectionWrapper";

function PopupWrapper({ handleClose, children }) {
  function handleClickOutside(evt) {
    if(evt.target === evt.currentTarget) {
      handleClose();
    }
  }

  function handleEscapeClose(evt) {
    if(evt.code === 'Escape') {
      handleClose();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
    }
  }, []);

  return (
    <PopupSectionWrapper
      onClick={handleClickOutside}
    >
      {children}
    </PopupSectionWrapper>
  );
}

export default PopupWrapper;