import Lead from './Lead';
import HowTo from './HowTo';
import ChooseRole from './ChooseRole';
import Vacancies from './Vacancies';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Contacts from './Contacts';

function MainPage({ handleOpenFormPopup, handleOpenVideoPopup }) {
  return (
    <>
      <Lead />
      <HowTo />
      <ChooseRole />
      <Vacancies
        handleOpen={handleOpenFormPopup}
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