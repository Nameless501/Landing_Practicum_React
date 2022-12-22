import { VideoGridWrapper } from "../assets/styles/GridWrapper";
import ReviewCard from "./ReviewCard";
import image1 from "../assets/images/Alisa.jpg";
import image2 from "../assets/images/Tina.jpg";
import image3 from "../assets/images/Sasha.jpg";
import image4 from "../assets/images/Vova.jpg";
import image5 from "../assets/images/Rita.jpg";
import image6 from "../assets/images/Polina.jpg";

function VideoReviews({ handleOpen }) {
  return (
        <VideoGridWrapper
          max-width="100%"
        >
          <ReviewCard
            gridArea="leftTop"
            image={image1}
            value="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            handleOpen={handleOpen}
          />
          <ReviewCard
            gridArea="middleTop"
            image={image2}
            value="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            handleOpen={handleOpen}
          />
          <ReviewCard
            gridArea="rightTop"
            image={image3}
            value="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            handleOpen={handleOpen}
          />
          <ReviewCard
            gridArea="leftBottom"
            image={image4}
            value="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            handleOpen={handleOpen}
          />
          <ReviewCard
            gridArea="middleBottom"
            image={image5}
            value="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            handleOpen={handleOpen}
          />
          <ReviewCard
            gridArea="rightBottom"
            image={image6}
            value="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            handleOpen={handleOpen}
          />
        </VideoGridWrapper>
  );
}

export default VideoReviews;