import { Link } from "react-router-dom";
import { TextRegularBold, TextSmall, TextExtraSmall } from "../assets/styles/Text";
import { ButtonPrimary, ButtonSecondary } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import VacancyRoleDescription from "./VacancyRoleDescription";
import VacancyRequirementsDescription from "./VacancyRequirementsDescription";
import { VACANCY_PAGE_ROUTE } from '../utils/constants';

function VacancyFullDescription({ vacancy }) {
  return (
    <FlexWrapper
      margin="0 0 26px"
      maxWidth="707px"
      widthMobile="315px"
      gap="55px"
      gapMobile="30px"
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
      <FlexWrapper
        hideOnMobile
      >
        <ButtonPrimary
          as={Link}
          to={{
            pathname: VACANCY_PAGE_ROUTE,
            state: { vacancy },
          }}
        >
          <TextSmall >
            Откликнуться
          </TextSmall>
        </ButtonPrimary>
      </FlexWrapper>
      <FlexWrapper
        hideOnDesktop
      >
        <ButtonSecondary
          as={Link}
          to={{
            pathname: VACANCY_PAGE_ROUTE,
            state: { vacancy },
          }}
          widthMobile="315px"
        >
          <TextExtraSmall >
            Откликнуться
          </TextExtraSmall>
        </ButtonSecondary>
      </FlexWrapper>
    </FlexWrapper>
  );
}

export default VacancyFullDescription;