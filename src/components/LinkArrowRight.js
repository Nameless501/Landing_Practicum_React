import { Link } from "react-router-dom";
import { LinkFlexWrapper } from "../assets/styles/FlexWrapper";
import { TextSmall } from "../assets/styles/Text";
import { StyledIcon } from "../assets/styles/StyledIcon";

function LinkArrowRight({ text, to }) {
  return (
    <LinkFlexWrapper
      as={Link}
      to={to}
      self="true"
      direction="row"
      gap="10px"
      align="center"
    >
      <StyledIcon
        width="17"
        height="17"
      >
        <path className="styled-path" d="M9.0321 16.6914C9.23221 16.4857 9.33699 16.2239 9.34645 15.9059C9.35518 15.588 9.2595 15.3262 9.05939 15.1205L3.71108 9.62211H15.9085C16.2178 9.62211 16.4772 9.51439 16.6867 9.29894C16.8956 9.08425 17 8.81793 17 8.5C17 8.18207 16.8956 7.91538 16.6867 7.69993C16.4772 7.48524 16.2178 7.37789 15.9085 7.37789H3.71108L9.05939 1.87954C9.2595 1.67382 9.35518 1.41199 9.34645 1.09406C9.33699 0.776127 9.23221 0.514301 9.0321 0.30858C8.832 0.10286 8.57731 0 8.26806 0C7.9588 0 7.70412 0.10286 7.50401 0.30858L0.300161 7.71452C0.191011 7.80803 0.113516 7.92473 0.0676727 8.06462C0.0225582 8.20526 0 8.35038 0 8.5C0 8.64961 0.0225582 8.78988 0.0676727 8.92079C0.113516 9.0517 0.191011 9.17327 0.300161 9.28548L7.50401 16.6914C7.70412 16.8971 7.9588 17 8.26806 17C8.57731 17 8.832 16.8971 9.0321 16.6914Z" fill="black"/>
      </StyledIcon>
      <TextSmall>
        {text}
      </TextSmall>
    </LinkFlexWrapper>
  );
}

export default LinkArrowRight;