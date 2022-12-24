import { Link } from "react-scroll";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { StyledSideMenu } from "../assets/styles/StyledSideMenu";
import { ButtonClosePopup, ButtonSecondary } from "../assets/styles/Button";
import NavigationBarHeader from "./NavigationBarHeader";
import { TextExtraSmall } from "../assets/styles/Text";

function SideMenu({ handleClose }) {
  return (
    <StyledSideMenu>
      <FlexWrapper
        padding="0 30px"
        direction="column"
        gap="20px"
        widthMobile="100%"
      >
        <ButtonClosePopup
          top="30px"
          right="30px"
          onClick={handleClose}
        />
        <NavigationBarHeader
          align="flex-start"
          handleClose={handleClose}
        />
      </FlexWrapper>
      <FlexWrapper
        as={Link}
        to="vacancies"
        offset={-110}
        onClick={handleClose}
      >
        <ButtonSecondary
          widthMobile="265px"
        >
          <TextExtraSmall>
            Хочу делиться знаниями
          </TextExtraSmall>
        </ButtonSecondary>
      </FlexWrapper>
    </StyledSideMenu>
  );
}

export default SideMenu;