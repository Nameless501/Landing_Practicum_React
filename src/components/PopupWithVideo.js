import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { StyledIFrame } from "../assets/styles/StyledIFrame";
import { ButtonClosePopup } from "../assets/styles/Button";

function PopupWithVideo({ handleClose, src }) {
  return (
    <FlexWrapper
      position="relative"
    >
      <StyledIFrame
        src={src}
      />
      <ButtonClosePopup
        onClick={handleClose}
        top="-25px"
        right="-25px"
      />
    </FlexWrapper>
  );
}

export default PopupWithVideo;