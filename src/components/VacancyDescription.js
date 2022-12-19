import { TextRegularBold, TextRegular, TextSmall } from "../assets/styles/Text";
import { ButtonPrimary } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { UnorderedList } from "../assets/styles/UnorderedList";
import { TextSpan } from "../assets/styles/StyledSpan";

function VacancyDescription({ role, salary, description, courseLength }) {
  return (
    <FlexWrapper
      margin="0 0 26px"
      maxWidth="707px"
      gap="55px"
      direction="column"
    >
      <TextRegularBold blue>
        {`[Оплата в среднем ${salary} тысяч ₽]`}
      </TextRegularBold>
      <FlexWrapper
        gap="15px"
        direction="column"
      >
        <TextRegularBold blue>
          {role === 'mentor' && 'Что делает наставник?'}
          {role === 'reviewer' && 'Что делает ревьюер?'}
        </TextRegularBold>
        <TextRegular>
          {role === 'mentor' &&
            `Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями.
            Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на
            протяжении ${courseLength} месяцев обучения и постоянно улучшает образовательный опыт.`
          }
          {role === 'reviewer' &&
            `Проверяет написанный студентом код и даёт обратную связь.
            Именно ревьюер решает: зачесть задание или нет. Также он
            даёт советы по улучшению кода, отмечает неточности,
            указывает на ошибки.`
          }
        </TextRegular>
      </FlexWrapper>
      <FlexWrapper
        gap="15px"
        direction="column"
      >
        <TextRegularBold blue>
          {role === 'mentor' && 'Я хочу стать наставником. Меня возьмут?'}
          {role === 'reviewer' && 'Я хочу стать ревьюером. Меня возьмут?'}
        </TextRegularBold>
        <FlexWrapper
          gap="5px"
          direction="column"
        >
          <TextRegular>
            Скорее всего — да, если вы:
          </TextRegular>
          <UnorderedList
            direction="column"
            align="flex-start"
          >
            {description.map((requirement, index) => {
              return (
                <li key={index} >
                  <TextRegular>
                    <TextSpan
                      align="middle"
                      margin="0 5px 0 0"
                    >
                      &bull;
                    </TextSpan>
                    {requirement}
                  </TextRegular>
                </li>
              )
            })}
          </UnorderedList>
        </FlexWrapper>
      </FlexWrapper>
      <ButtonPrimary>
        <TextSmall white >
          Откликнуться
        </TextSmall>
      </ButtonPrimary>
    </FlexWrapper>
  );
}

export default VacancyDescription;