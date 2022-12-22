import { useLocation } from 'react-router-dom';
import NavigationBarHeader from './NavigationBarHeader';
import { StyledHeader } from '../assets/styles/StyledHeader';
import { YandexLogo } from '../assets/styles/YandexLogo'
import { ButtonGhost, ButtonSecondary } from '../assets/styles/Button';
import { TextSmall, TextExtraSmall } from '../assets/styles/Text';

function Header({ handleOpen }) {
  const location = useLocation();

  return (
    <StyledHeader>
      <YandexLogo />
      {
        location.pathname === '/' &&
        <>
          <NavigationBarHeader />
          <ButtonGhost>
            <TextSmall>
              Хочу делиться знаниями
            </TextSmall>
          </ButtonGhost>
        </>
      }
      {
        location.pathname === '/vacancy' &&
        <ButtonSecondary
          onClick={handleOpen}
        >
          <TextExtraSmall>
            Откликнуться
          </TextExtraSmall>
        </ButtonSecondary>
      }
    </StyledHeader>
  );
}

export default Header;
