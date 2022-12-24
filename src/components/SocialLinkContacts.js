import { TextLarge, TextRadio } from "../assets/styles/Text";
import { StyledIcon } from "../assets/styles/StyledIcon";
import { LinkFlexWrapper } from "../assets/styles/FlexWrapper";

function SocialLinkContacts({ link, name, width, widthMobile, height, children }) {
  return (
    <>
      <LinkFlexWrapper
        link={link}
        as="a"
        gap="15px"
        width="160px"
        widthMobile="75px"
        direction="column"
        align="center"
        hideOnMobile
      >
        <StyledIcon
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          {children}
        </StyledIcon>
        <TextLarge>
          {name}
        </TextLarge>
      </LinkFlexWrapper>
      <LinkFlexWrapper
        link={link}
        as="a"
        gap="15px"
        width="160px"
        widthMobile="75px"
        direction="column"
        align="center"
        hideOnDesktop
      >
        <StyledIcon
          width={widthMobile}
          viewBox={`0 0 ${width} ${height}`}
        >
          {children}
        </StyledIcon>
        <TextRadio>
          {name}
        </TextRadio>
      </LinkFlexWrapper>
    </>
  );
}

export default SocialLinkContacts;