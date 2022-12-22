import { Link } from "react-router-dom";
import { TextRegularBold, TextRegular, TextSmall } from "../assets/styles/Text";
import { ButtonPrimary } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { UnorderedList } from "../assets/styles/UnorderedList";
import { TextSpan } from "../assets/styles/StyledSpan";
import VacancyRoleDescription from "./VacancyRoleDescription";
import VacancyRequirementsDescription from "./VacancyRequirementsDescription";

function VacancyFullDescription({ vacancy }) {
  return (
    <FlexWrapper
      margin="0 0 26px"
      maxWidth="707px"
      gap="55px"
      direction="column"
    >
      <TextRegularBold blue>
        {`[Оплата в среднем ${vacancy.salary} тысяч ₽]`}
      </TextRegularBold>
      <VacancyRoleDescription
        vacancy={vacancy}
      />
      <VacancyRequirementsDescription
        vacancy={vacancy}
      />
      <ButtonPrimary
        as={Link}
        to={{
          pathname: "/vacancy",
          state: { vacancy },
        }}
      >
        <TextSmall white >
          Откликнуться
        </TextSmall>
      </ButtonPrimary>
    </FlexWrapper>
  );
}

export default VacancyFullDescription;