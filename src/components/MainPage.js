import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Lead from './Lead';
import HowTo from './HowTo';
import ChooseRole from './ChooseRole';
import Vacancies from './Vacancies';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Contacts from './Contacts';

function MainPage({ handleOpenFormPopup, handleOpenVideoPopup }) {
  const [selectedRoleAndCourse, setRoleAndCourse] = useState({ roleSelect: 'mentor', courseSelect: 'programming' });
  const location = useLocation();

  useEffect(() => {
    if(location.state) {
      const { role, course } = location.state.vacancy;
      setRoleAndCourse({
        roleSelect: role,
        courseSelect: course,
      });

      scroller.scrollTo('vacancies', { offset: -110 });
    }
  }, []);

  return (
    <>
      <Lead />
      <HowTo />
      <ChooseRole
        setRoleAndCourse={setRoleAndCourse}
      />
      <Vacancies
        handleOpen={handleOpenFormPopup}
        selected={selectedRoleAndCourse}
        setRoleAndCourse={setRoleAndCourse}
      />
      <Reviews
        handleOpen={handleOpenVideoPopup}
      />
      <FAQ />
      <Contacts />
    </>
  );
}

export default MainPage;