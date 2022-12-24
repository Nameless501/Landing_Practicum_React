import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H2 } from "../assets/styles/Text";
import { FlexWrapper } from '../assets/styles/FlexWrapper';
import VideoReviews from "./VideoReviews";

function Reviews({ handleOpen }) {
  return (
    <SectionWrapper
      margin='XL'
      id="reviews"
    >
      <FlexWrapper
        direction="column"
        gap="40px"
        gapMobile="25px"
      >
        <H2>
          Истории ребят из нашей команды
        </H2>
        <VideoReviews
          handleOpen={handleOpen}
        />
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default Reviews;