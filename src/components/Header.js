
import NavigationBar from './NavigationBar';
import { StyledHeader } from '../assets/styles/StyledHeader';
import { YandexLogo } from '../assets/styles/YandexLogo'
import { ButtonGhost } from '../assets/styles/Button';
import { TextSmall } from '../assets/styles/Text';

function Header() {
  return (
    <StyledHeader>
      <YandexLogo />
      <NavigationBar />
      <ButtonGhost>
        <TextSmall>
          Хочу делиться знаниями
        </TextSmall>
      </ButtonGhost>
    </StyledHeader>
  );
}

export default Header;
