import { useEffect, useState } from 'react';
import { ButtonGhost } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { TextSmall } from '../assets/styles/Text';
import Dropdown from "./Dropdown";
import { Divider } from "../assets/styles/Divider";
import VacancyDescription from './VacancyDescription';
import { UnorderedList } from '../assets/styles/UnorderedList';

function VacanciesList({ vacancies }) {
  const [renderedVacancies, setRenderedVacancies] = useState([]);

  function showNextVacancies() {
    if (vacancies.length > renderedVacancies.length) {
      const index = renderedVacancies.length;

      setRenderedVacancies(current => [
        ...current,
        ...vacancies.slice(index, index + 6)
      ])
    }
  }

  useEffect(() => {
    setRenderedVacancies([...vacancies.slice(0, 6)]);
  }, [vacancies])

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
                    vacancy={vacancy}
                  />
                </Dropdown>
                <Divider />
              </li>
            )
          })
          }
        </UnorderedList>
      </FlexWrapper>
      {renderedVacancies.length < vacancies.length &&
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