import { useState, useEffect } from "react";
import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H2 } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import RoleSelect from "./RoleSelect";
import CourseSelect from "./CourseSelect";
import NoAvailableVacancies from "./NoAvailableVacancies";
import VacanciesList from "./VacanciesList";
import { vacanciesData } from "../utils/vacancies";

function Vacancies({ selected, setRoleAndCourse, handleOpen }) {
  const [vacancies, setVacancies] = useState([]);

  function handleSelectedChange(evt) {
    setRoleAndCourse((current) => ({
      ...current,
      [evt.target.name]: evt.target.value,
    }))
  }

  function getSelectedVacancies() {
    const currentVacancies = vacanciesData[selected.courseSelect][selected.roleSelect];
    setVacancies(() => currentVacancies);
  }

  useEffect(() => {
    getSelectedVacancies();
  }, [selected]);

  return (
    <SectionWrapper
      margin='L'
      id="vacancies"
    >
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
          <RoleSelect
            selected={selected.roleSelect}
            handleSelectedChange={handleSelectedChange}
          />
          <CourseSelect
            selected={selected.courseSelect}
            handleSelectedChange={handleSelectedChange}
          />
        </FlexWrapper>
        {vacancies.length > 0 && <VacanciesList vacancies={vacancies} />}
      </FlexWrapper>
      {vacancies.length === 0 && <NoAvailableVacancies handleOpen={handleOpen} />}
    </SectionWrapper>
  );
}

export default Vacancies;