import { NavLink } from '../assets/styles/Link';
import { TextRegular } from '../assets/styles/Text';
import { UnorderedList } from '../assets/styles/UnorderedList';
import { FlexWrapper } from '../assets/styles/FlexWrapper';

function NavigationBarFooter() {
  return (
    <FlexWrapper
      direction="row"
      gap="110px"
    >
      <UnorderedList
        direction="column"
        align="flex-start"
        gap="15px"
      >
        <li>
          <NavLink >
            <TextRegular>
              Помощь
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
            <TextRegular
              link="https://code.s3.yandex.net/License%20YSDA.pdf"
              blank
            >
              Лицензия
            </TextRegular>
          </NavLink>
        </li>
      </UnorderedList>
      <UnorderedList
        direction="column"
        align="flex-start"
        gap="15px"
        maxWidth="max-content"
      >
        <li>
          <NavLink >
            <TextRegular>
              Правовая информация
            </TextRegular>
          </NavLink>
        </li>
        <li>
          <NavLink >
            <TextRegular>
              Для работодателей
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
      </UnorderedList>
    </FlexWrapper>
  );
}

export default NavigationBarFooter;