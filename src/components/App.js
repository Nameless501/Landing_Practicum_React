import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../assets/styles/Theme';
import GlobalStyles from '../assets/styles/Global';
import { PageWrapper } from '../assets/styles/PageWrapper';
import Header from './Header';
import Lead from './Lead';
import HowTo from './HowTo';
import ChooseRole from './ChooseRole';
import Vacancies from './Vacancies';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Contacts from './Contacts';
import Footer from './Footer';
import Portal from './Portal';
import { PopupWrapper } from '../assets/styles/PopupWrapper';
import PopupWithForm from './PopupWithForm';
import { useState } from 'react';

function App() {
  const [popupIsOpen, setPopupState] = useState(false);

  function handleClosePopups() {
    setPopupState(false);
  }

  function handleOpenPopup() {
    setPopupState(true);
  }

  return (
    <ThemeProvider theme={Theme} >
      <PageWrapper>
        <GlobalStyles />
        <Switch>
          <Route exact path='/' >
            <Header />
            <Lead />
            <HowTo />
            <ChooseRole />
            <Vacancies
              handleOpen={handleOpenPopup}
            />
            <Reviews />
            <FAQ />
            <Contacts />
            <Footer />
          </Route>
          <Route path='/vacancy' >
            <Header />
            <Footer />
          </Route>
        </Switch>
        <Portal>
          {popupIsOpen &&
            <PopupWrapper>
              <PopupWithForm
                handleClose={handleClosePopups}
              />
            </PopupWrapper>
          }
        </Portal>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
