import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H2 } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import QuestionsList from "./QuestionsList";

function FAQ() {
  return (
    <SectionWrapper
      margin='XL'
      id="faq"
    >
      <FlexWrapper
        direction="column"
        gap="40px"
        gapMobile="25px"
      >
        <H2
          as="h2"
        >
          FAQ
        </H2>
        <QuestionsList />
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default FAQ;