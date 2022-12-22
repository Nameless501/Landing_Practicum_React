import { Link } from 'react-scroll';
import { NavLink } from '../assets/styles/Link';
import { TextRegular } from '../assets/styles/Text';
import { UnorderedList } from '../assets/styles/UnorderedList';

function NavigationBarHeader() {
  return (
    <UnorderedList direction="row" gap="35px" >
      <li>
        <NavLink
          as={Link}
          to="vacancies"
          spy={true}
          offset={-110}
          activeClass="active"
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