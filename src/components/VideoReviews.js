import { VideoGridWrapper } from "../assets/styles/GridWrapper";
import ReviewCard from "./ReviewCard";
import image1 from "../assets/images/Alisa.jpg";
import image2 from "../assets/images/Tina.jpg";
import image3 from "../assets/images/Sasha.jpg";
import image4 from "../assets/images/Vova.jpg";
import image5 from "../assets/images/Rita.jpg";
import image6 from "../assets/images/Polina.jpg";

function VideoReviews() {
  return (
        <VideoGridWrapper
          max-width="100%"
        >
          <ReviewCard
            gridArea="leftTop"
            image={image1}
          />
          <ReviewCard
            gridArea="middleTop"
            image={image2}
          />
          <ReviewCard
            gridArea="rightTop"
            image={image3}
          />
          <ReviewCard
            gridArea="leftBottom"
            image={image4}
          />
          <ReviewCard
            gridArea="middleBottom"
            image={image5}
          />
          <ReviewCard
            gridArea="rightBottom"
            image={image6}
          />
        </VideoGridWrapper>
  );
}

export default VideoReviews;