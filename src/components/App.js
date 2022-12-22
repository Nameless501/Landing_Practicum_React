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

function App() {
  const [formPopupState, setFormPopupState] = useState(false);
  const [videoPopupState, setVideoPopupState] = useState({ open: false, video: '' })

  function handleClosePopups() {
    setFormPopupState(false);
    setVideoPopupState({ open: false, video: '' });
  }

  function handleOpenFormPopup() {
    setFormPopupState(true);
  }

  function handleOpenVideoPopup(video) {
    setVideoPopupState({ open: true, video });
  }

  return (
    <ThemeProvider theme={Theme} >
      <PageWrapper>
        <GlobalStyles />
        <Header
          handleOpen={handleOpenFormPopup}
        />
        <Switch>
          <Route exact path='/' >
            <MainPage
              handleOpenFormPopup={handleOpenFormPopup}
              handleOpenVideoPopup={handleOpenVideoPopup}
            />
          </Route>
          <Route path='/vacancy' >
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
        </Portal>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
