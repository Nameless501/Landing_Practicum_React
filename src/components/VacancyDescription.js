import { Link } from "react-router-dom";
import { TextRegularBold, TextRegular, TextSmall } from "../assets/styles/Text";
import { ButtonPrimary } from '../assets/styles/Button';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { UnorderedList } from "../assets/styles/UnorderedList";
import { TextSpan } from "../assets/styles/StyledSpan";

function VacancyDescription({ vacancy }) {
  return (
    <FlexWrapper
      margin="0 0 26px"
      maxWidth="707px"
      gap="55px"
      direction="column"
    >
      <TextRegularBold blue>
        {`[Оплата в среднем ${vacancy.salary} тысяч ₽]`}
      </TextRegularBold>
      <FlexWrapper
        gap="15px"
        direction="column"
      >
        <TextRegularBold blue>
          {vacancy.role === 'mentor' && 'Что делает наставник?'}
          {vacancy.role === 'reviewer' && 'Что делает ревьюер?'}
        </TextRegularBold>
        <TextRegular>
          {vacancy.role === 'mentor' &&
            `Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями.
            Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на
            протяжении ${vacancy.courseLength} месяцев обучения и постоянно улучшает образовательный опыт.`
          }
          {vacancy.role === 'reviewer' &&
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
          {vacancy.role === 'mentor' && 'Я хочу стать наставником. Меня возьмут?'}
          {vacancy.role === 'reviewer' && 'Я хочу стать ревьюером. Меня возьмут?'}
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
            {vacancy.description.map((requirement, index) => {
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
      <ButtonPrimary
        as={Link}
        to={{
          pathname: "/vacancy",
          state: { vacancy },
        }}
      >
        <TextSmall white >
          Откликнуться
        </TextSmall>
      </ButtonPrimary>
    </FlexWrapper>
  );
}

export default VacancyDescription;