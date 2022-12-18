import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H2, TextSmall } from "../assets/styles/Text";
import { ButtonPrimary } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import RoleSelect from "./RoleSelect";
import CourseSelect from "./CourseSelect";

function Vacancies() {
  return (
    <SectionWrapper margin='L' >
      <FlexWrapper
        direction="column"
        gap="40px"
      >
        <H2 as="h2" >
          Открытые предложения
        </H2>
        <FlexWrapper
          as="form"
          direction="column"
          gap="30px"
        >
          <RoleSelect />
          <CourseSelect />
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default Vacancies;