import { ButtonVideo } from '../assets/styles/Button';
import { CardWithVideo } from "../assets/styles/Card";
import { CardImage } from "../assets/styles/CardImage";

function ReviewCard({ image, value, gridArea, handleOpen }) {
  function onClick() {
    handleOpen(value);
  }

  return (
    <CardWithVideo
      gridArea={gridArea}
    >
      <CardImage
        src={image}
      />
      <ButtonVideo
        onClick={onClick}
      />
    </CardWithVideo>
  );
}

export default ReviewCard;