import { useLocation } from "react-router-dom";
import { TextRegularBold, TextRegular, TextLarge } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";

function VacancyRoleDescription({ vacancy }) {
  const location = useLocation();

  return (
    <FlexWrapper
      gap={location.pathname === "/" ? "15px" : "20px"}
      direction="column"
    >
      {
        location.pathname === "/" &&
          <TextRegularBold blue>
            {vacancy.role === 'mentor' ? 'Что делает наставник?' : 'Что делает ревьюер?'}
          </TextRegularBold>
      }
      {
        location.pathname === "/vacancy" &&
          <TextLarge blue>
            {vacancy.role === 'mentor' ? 'Что делает наставник?' : 'Что делает ревьюер?'}
          </TextLarge>
      }
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
  );
}

export default VacancyRoleDescription;