import { useState } from 'react';
import Lead from './Lead';
import HowTo from './HowTo';
import ChooseRole from './ChooseRole';
import Vacancies from './Vacancies';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Contacts from './Contacts';

function MainPage({ handleOpenFormPopup, handleOpenVideoPopup }) {
  const [selectedRoleAndCourse, setRoleAndCourse] = useState({ roleSelect: 'mentor', courseSelect: 'programming' });

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