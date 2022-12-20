import { TextLarge } from "../assets/styles/Text";
import { StyledIcon } from "../assets/styles/StyledIcon";
import { LinkFlexWrapper } from "../assets/styles/FlexWrapper";

function SocialLink({ link, name, width, height, children }) {
  return (
    <LinkFlexWrapper
      link={link}
      as="a"
      gap="15px"
      maxWidth="160px"
      direction="column"
      align="center"
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
  );
}

export default SocialLink;