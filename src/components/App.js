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

function App() {
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
            <Vacancies />
          </Route>
          <Route path='/vacancy' >
            <Header />
          </Route>
        </Switch>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
