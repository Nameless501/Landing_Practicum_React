import { TextRegular } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";

function QuestionAnswer({ children }) {
  return (
    <FlexWrapper
      margin="0 0 26px"
      maxWidth="692px"
      direction="column"
    >
      <TextRegular >
        {children}
      </TextRegular>
    </FlexWrapper>
  );
}

export default QuestionAnswer;