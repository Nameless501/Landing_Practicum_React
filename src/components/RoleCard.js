import { H3, TextExtraSmall } from "../assets/styles/Text";
import { ButtonSecondary } from "../assets/styles/Button";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { Card } from "../assets/styles/Card";
import { CardImage } from "../assets/styles/CardImage";

function RoleCard({ image, title, children }) {
  return (
    <Card
      padding="50px"
      radius="40px"
      color="lightGray"
      width="590px"
      height="712px"
      justify="space-between"
    >
      <FlexWrapper
        direction="column"
      >
        <CardImage
          src={image}
          width="100%"
          height="265px"
          radius="30px"
        />
        <FlexWrapper
          margin="25px 0 0"
          direction="column"
          gap="15px"
        >
          <H3 as="h3" >
            {title}
          </H3>
          {children}
        </FlexWrapper>
      </FlexWrapper>
      <ButtonSecondary >
        <TextExtraSmall white >
          {`Хочу стать ${title}ом`}
        </TextExtraSmall>
      </ButtonSecondary>
    </Card>
  );
}

export default RoleCard;