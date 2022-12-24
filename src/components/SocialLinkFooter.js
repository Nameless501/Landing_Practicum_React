import { StyledIcon } from "../assets/styles/StyledIcon";
import { LinkFlexWrapper } from "../assets/styles/FlexWrapper";

function SocialLinkFooter({ link, width, widthMobile, height, children }) {
  return (
    <>
      <LinkFlexWrapper
        link={link}
        as="a"
        gap="15px"
        hideOnMobile
      >
        <StyledIcon
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          {children}
        </StyledIcon>
      </LinkFlexWrapper>
      <LinkFlexWrapper
        link={link}
        as="a"
        hideOnDesktop
      >
        <StyledIcon
          width={widthMobile}
          viewBox={`0 0 ${width} ${height}`}
        >
          {children}
        </StyledIcon>
      </LinkFlexWrapper>
    </>
  );
}

export default SocialLinkFooter;