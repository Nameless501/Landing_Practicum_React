import { ButtonPrimary } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import Dropdown from "./Dropdown";
import { Divider } from "../assets/styles/Divider";
import VacancyDescription from './VacancyDescription';
import { UnorderedList } from '../assets/styles/UnorderedList';

function VacanciesList({ vacancies }) {
  return (
    <FlexWrapper
      direction="column"
    >
      <Divider />
      <UnorderedList
        direction="column"
        align="stretch"
      >
        {vacancies.map((vacancy, index) => {
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
  );
}

export default VacanciesList;