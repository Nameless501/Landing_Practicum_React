import { Link } from 'react-scroll';
import { NavLink } from '../assets/styles/Link';
import { TextRegular } from '../assets/styles/Text';
import { UnorderedList } from '../assets/styles/UnorderedList';

function NavigationBarHeader({ align, handleClose = null }) {
  return (
    <UnorderedList
      direction="row"
      directionMobile="column"
      gap="35px"
      gapMobile="10px"
      align={align}
    >
      <li>
        <NavLink
          as={Link}
          to="choose-role"
          spy={true}
          offset={-110}
          activeClass="active"
          onClick={handleClose}
        >
          <TextRegular>
            Направления
          </TextRegular>
        </NavLink>
      </li>
      <li>
        <NavLink
          as={Link}
          to="vacancies"
          spy={true}
          offset={-110}
          activeClass="active"
          onClick={handleClose}
        >
          <TextRegular>
            Предложения
          </TextRegular>
        </NavLink>
      </li>
      <li>
        <NavLink
          as={Link}
          to="reviews"
          spy={true}
          offset={-110}
          activeClass="active"
          onClick={handleClose}
        >
          <TextRegular>
            Отзывы
          </TextRegular>
        </NavLink>
      </li>
      <li>
        <NavLink
          as={Link}
          to="faq"
          spy={true}
          offset={-110}
          activeClass="active"
          onClick={handleClose}
        >
          <TextRegular>
            FAQ
          </TextRegular>
        </NavLink>
      </li>
    </UnorderedList>
  );
}

export default NavigationBarHeader;