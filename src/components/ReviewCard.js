import { ButtonVideo } from '../assets/styles/Button';
import { CardWithVideo } from "../assets/styles/Card";
import { CardImage } from "../assets/styles/CardImage";

function ReviewCard({ image, gridArea }) {
  return (
    <CardWithVideo
      width="100%"
      height="100%"
      gridArea={gridArea}
      radius="30px"
    >
      <CardImage
        width="100%"
        height="100%"
        radius="30px"
        src={image}
      />
      <ButtonVideo />
    </CardWithVideo>
  );
}

export default ReviewCard;