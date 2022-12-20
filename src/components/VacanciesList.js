import { useState } from 'react';
import { ButtonGhost } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { TextSmall } from '../assets/styles/Text';
import Dropdown from "./Dropdown";
import { Divider } from "../assets/styles/Divider";
import VacancyDescription from './VacancyDescription';
import { UnorderedList } from '../assets/styles/UnorderedList';

function VacanciesList({ vacancies }) {
  const [renderedVacancies, setRenderedVacancies] = useState([...vacancies.slice(0, 6)]);
  const [showButton, setButtonState] = useState(renderedVacancies.length < vacancies.length);

  function showNextVacancies() {
    if(vacancies.length > renderedVacancies.length) {
      const index = renderedVacancies.length;

      setRenderedVacancies(current => [
        ...current,
        ...vacancies.slice(index, index + 6)
      ])
    } else {
      setButtonState(false);
    }
  }

  return (
    <FlexWrapper
      direction="column"
      gap="50px"
    >
      <FlexWrapper
        direction="column"
      >
        <Divider />
        <UnorderedList
          direction="column"
          align="stretch"
        >
          {renderedVacancies.map((vacancy, index) => {
            return (
              <li key={index}>
                <Dropdown
                  name={vacancy.name}
                >
                  <VacancyDescription
                    role={vacancy.role}
                    salary={vacancy.salary}
                    description={vacancy.description}
                    courseLength={vacancy.courseLength}
                  />
                </Dropdown>
                <Divider />
              </li>
            )
          })
          }
        </UnorderedList>
      </FlexWrapper>
      {showButton &&
        <ButtonGhost
          onClick={showNextVacancies}
        >
          <TextSmall >
            Показать еще
          </TextSmall>
      </ButtonGhost>
      }
    </FlexWrapper>
  );
}

export default VacanciesList;