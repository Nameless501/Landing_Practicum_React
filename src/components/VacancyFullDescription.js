import { Link } from "react-router-dom";
import { TextRegularBold, TextSmall } from "../assets/styles/Text";
import { ButtonPrimary } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import VacancyRoleDescription from "./VacancyRoleDescription";
import VacancyRequirementsDescription from "./VacancyRequirementsDescription";
import { VACANCY_PAGE_ROUTE } from '../utils/constants';

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
          pathname: VACANCY_PAGE_ROUTE,
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