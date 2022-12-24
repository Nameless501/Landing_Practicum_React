import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../assets/styles/Theme';
import GlobalStyles from '../assets/styles/Global';
import { PageWrapper } from '../assets/styles/PageWrapper';
import Header from './Header';
import MainPage from './MainPage';
import VacancyPage from './VacancyPage';
import Footer from './Footer';
import Portal from './Portal';
import PopupWrapper from './PopupWrapper';
import PopupWithForm from './PopupWithForm';
import PopupWithVideo from './PopupWithVideo';
import SideMenu from './SideMenu';
import { MAIN_PAGE_ROUTE, VACANCY_PAGE_ROUTE } from '../utils/constants';

function App() {
  const [formPopupState, setFormPopupState] = useState(false);
  const [videoPopupState, setVideoPopupState] = useState({ open: false, video: '' });
  const [sideMenuState, setSideMenuState] = useState(false);

  function handleClosePopups() {
    setFormPopupState(false);
    setVideoPopupState({ open: false, video: '' });
    setSideMenuState(false);
  }

  function handleOpenFormPopup() {
    setFormPopupState(true);
  }

  function handleOpenVideoPopup(video) {
    setVideoPopupState({ open: true, video });
  }

  function handleOpenSideMenu() {
    setSideMenuState(true);
  }

  return (
    <ThemeProvider theme={Theme} >
      <PageWrapper>
        <GlobalStyles />
        <Header
          handleOpenPopup={handleOpenFormPopup}
          handleOpenSideMenu={handleOpenSideMenu}
        />
        <Switch>
          <Route exact path={MAIN_PAGE_ROUTE} >
            <MainPage
              handleOpenFormPopup={handleOpenFormPopup}
              handleOpenVideoPopup={handleOpenVideoPopup}
            />
          </Route>
          <Route path={VACANCY_PAGE_ROUTE} >
            <VacancyPage
              handleOpen={handleOpenFormPopup}
            />
          </Route>
        </Switch>
        <Footer />
        <Portal>
          {formPopupState &&
            <PopupWrapper
              handleClose={handleClosePopups}
            >
              <PopupWithForm
                handleClose={handleClosePopups}
              />
            </PopupWrapper>
          }
          {videoPopupState.open &&
            <PopupWrapper
              handleClose={handleClosePopups}
            >
              <PopupWithVideo
                handleClose={handleClosePopups}
                src={videoPopupState.video}
              />
            </PopupWrapper>
          }
          {sideMenuState &&
            <PopupWrapper
              handleClose={handleClosePopups}
            >
              <SideMenu
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
