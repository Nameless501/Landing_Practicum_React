import { scroller } from 'react-scroll';
import { H3, TextExtraSmall } from "../assets/styles/Text";
import { ButtonSecondary } from "../assets/styles/Button";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { StyledRoleCard } from "../assets/styles/Card";
import { CardImage } from "../assets/styles/CardImage";

function RoleCard({ image, title, value, setRoleAndCourse, children }) {
  function handleClick(evt) {
    setRoleAndCourse(current => ({
      ...current,
      roleSelect: value,
    }));
    scroller.scrollTo('vacancies', { offset: -110 });
  }

  return (
    <StyledRoleCard>
      <FlexWrapper
        direction="column"
      >
        <CardImage
          src={image}
          radius="30px"
          radiusMobile="20px"
          heightMobile="160px"
        />
        <FlexWrapper
          margin="25px 0 0"
          direction="column"
          gap="15px"
          gapMobile="10px"
        >
          <H3
            as="h3"
          >
            {title}
          </H3>
          {children}
        </FlexWrapper>
      </FlexWrapper>
      <ButtonSecondary
        widthMobile="275px"
        onClick={handleClick}
      >
        <TextExtraSmall >
          {`Хочу стать ${title}ом`}
        </TextExtraSmall>
      </ButtonSecondary>
    </StyledRoleCard>
  );
}

export default RoleCard;