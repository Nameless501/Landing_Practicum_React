import { ButtonVideo } from '../assets/styles/Button';
import { CardWithVideo } from "../assets/styles/Card";
import { CardImage } from "../assets/styles/CardImage";

function ReviewCard({ image, value, gridArea, handleOpen }) {
  function onClick() {
    handleOpen(value);
  }

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
      <ButtonVideo
        onClick={onClick}
      />
    </CardWithVideo>
  );
}

export default ReviewCard;