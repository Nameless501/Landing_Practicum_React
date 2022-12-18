import { NavLink } from '../assets/styles/Link';
import { TextRegular } from '../assets/styles/Text';
import { UnorderedList } from '../assets/styles/UnorderedList';

function NavigationBar() {
  return (
    <UnorderedList direction="row" gap="35px" >
      <li>
        <NavLink >
          <TextRegular>
            Направления
          </TextRegular>
        </NavLink>
      </li>
      <li>
        <NavLink >
          <TextRegular>
            Предложения
          </TextRegular>
        </NavLink>
      </li>
      <li>
        <NavLink >
          <TextRegular>
            Отзывы
          </TextRegular>
        </NavLink>
      </li>
      <li>
        <NavLink >
          <TextRegular>
            FAQ
          </TextRegular>
        </NavLink>
      </li>
    </UnorderedList>
  );
}

export default NavigationBar;