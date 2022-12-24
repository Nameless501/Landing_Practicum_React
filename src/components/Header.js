import { useLocation } from 'react-router-dom';
import { Link, animateScroll } from 'react-scroll';
import NavigationBarHeader from './NavigationBarHeader';
import { StyledHeader } from '../assets/styles/StyledHeader';
import { YandexLogo } from '../assets/styles/YandexLogo'
import { ButtonGhost, ButtonSecondary } from '../assets/styles/Button';
import { TextSmall, TextExtraSmall } from '../assets/styles/Text';
import { FlexWrapper } from '../assets/styles/FlexWrapper';
import BurgerButton from './BurgerButton';

function Header({ handleOpen }) {
  const location = useLocation();

  function handleLogoClick() {
    animateScroll.scrollToTop({
      duration: 50,
      delay: 0,
      smooth: 'linear',
    });
  }

  return (
    <StyledHeader>
      <YandexLogo
        onClick={handleLogoClick}
      />
      {
        location.pathname === '/' &&
        <>
          <FlexWrapper
            direction="row"
            gap="70px"
            hideOnMobile
          >
            <NavigationBarHeader />
            <ButtonGhost
              as={Link}
              to="vacancies"
              offset={-110}
            >
              <TextSmall>
                Хочу делиться знаниями
              </TextSmall>
            </ButtonGhost>
          </FlexWrapper>
          <FlexWrapper
            hideOnDesktop
          >
            <BurgerButton />
          </FlexWrapper>
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
