import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { H3, TextLarge, TextRegular, TextSmall } from "../assets/styles/Text";
import { UnorderedList } from "../assets/styles/UnorderedList";
import { TextSpan } from "../assets/styles/StyledSpan";
import { ButtonPrimary } from "../assets/styles/Button";
import VacancyRoleDescription from "./VacancyRoleDescription";
import VacancyRequirementsDescription from "./VacancyRequirementsDescription";
import LinkArrowRight from "./LinkArrowRight";
import { MAIN_PAGE_ROUTE } from '../utils/constants';

function VacancyPage({ handleOpen }) {
  const [currentVacancy, setCurrentVacancy] = useState({})
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Сохранение данных вакансии в localStorage на случай, если пользователь обновит страницу.
  // Если данных вакансии нет, то переадрессация на главную страницу

  useEffect(() => {
    if (location.state) {
      const { vacancy } = location.state;
      setCurrentVacancy(vacancy);
      localStorage.setItem('vacancy', JSON.stringify(vacancy));
    } else if (localStorage.getItem('vacancy')) {
      const vacancy = JSON.parse(localStorage.getItem('vacancy'));
      setCurrentVacancy(vacancy);
    } else {
      history.push(MAIN_PAGE_ROUTE);
    }
  }, [])

  return (
    <SectionWrapper>
      <FlexWrapper
        maxWidth="1000px"
        gap="50px"
        direction="column"
      >
        <LinkArrowRight
          to={{
            pathname: MAIN_PAGE_ROUTE,
            state: { vacancy: currentVacancy },
          }}
          text="К списку предложений"
        />
        <FlexWrapper
          gap="20px"
          direction="column"
        >
          <H3
            as="h3"
          >
            {currentVacancy.role === "mentor" ?
              `Наставник на курс ${currentVacancy.name}` : `Ревьюер на курс ${currentVacancy.name}`
            }
          </H3>
          <TextLarge blue>
            {`[Оплата в среднем ${currentVacancy.salary} тысяч ₽]`}
          </TextLarge>
        </FlexWrapper>
        <FlexWrapper
          gap="20px"
          direction="column"
        >
          <TextRegular>
            Яндекс Практикум — это сервис онлайн-образования, доступный в России и Америке.
            Мы помогаем людям расти — на работе и в жизни.
          </TextRegular>
          <TextRegular>
            Сейчас мы делаем продвинутый курс «Мидл фронтенд-разработчик», наши студенты — разработчики с опытом, которые замотивированы решать интересные задачи. Наша цель — научить студентов не просто кодингу, а дать им мышление инженера, который отлично разбирается в применяемых технологиях и может самостоятельно решать сложные задачи.
            Если у вас есть знания и опыт в области фронтенд-разработки, то вы можете стать наставником.
          </TextRegular>
        </FlexWrapper>
        <VacancyRoleDescription
          vacancy={currentVacancy}
        />
        {
          currentVacancy.description &&
          <VacancyRequirementsDescription
            vacancy={currentVacancy}
          />
        }
        <FlexWrapper
          gap="20px"
          direction="column"
        >
          <TextLarge blue>
            Я подхожу. Что вы можете мне предложить?
          </TextLarge>
          <UnorderedList
            direction="column"
            align="flex-start"
          >
            <li>
              <TextRegular>
                <TextSpan
                  align="middle"
                  margin="0 5px 0 0"
                >
                  &bull;
                </TextSpan>
                Удалённое сотрудничество и ежемесячное вознаграждение;
              </TextRegular>
            </li>
            <li>
              <TextRegular>
                <TextSpan
                  align="middle"
                  margin="0 5px 0 0"
                >
                  &bull;
                </TextSpan>
                Частичную занятость и возможность совмещать участие в проекте с основной работой;
              </TextRegular>
            </li>
            <li>
              <TextRegular>
                <TextSpan
                  align="middle"
                  margin="0 5px 0 0"
                >
                  &bull;
                </TextSpan>
                Обмен опытом с разработчиками в нашем сообществе;
              </TextRegular>
            </li>
            <li>
              <TextRegular>
                <TextSpan
                  align="middle"
                  margin="0 5px 0 0"
                >
                  &bull;
                </TextSpan>
                Обучение в Школе наставников Яндекс.Практикума.
              </TextRegular>
            </li>
          </UnorderedList>
        </FlexWrapper>
        <FlexWrapper
          gap="20px"
          direction="column"
        >
          <TextLarge blue>
            Как я пойму, что у меня достаточно экспертизы, чтобы делиться знаниями со студентами?
          </TextLarge>
          <UnorderedList
            direction="column"
            align="flex-start"
          >
            <li>
              <TextRegular>
                <TextSpan
                  align="middle"
                  margin="0 5px 0 0"
                >
                  &bull;
                </TextSpan>
                Мы в первую очередь ценим практический опыт с теми технологиями, которые изучают на наших курсах.
                Нам важно, чтобы наставники делились с группой настоящими рабочими кейсами, поэтому экспертами становятся
                разработчики уровня мидл и старше.
              </TextRegular>
            </li>
            <li>
              <TextRegular>
                <TextSpan
                  align="middle"
                  margin="0 5px 0 0"
                >
                  &bull;
                </TextSpan>
                Опыт преподавания или обучения необязателен, главное — желание. Каждый эксперт проходит
                Школу наставников от Практикума, где знакомится с лучшими практиками образовательного процесса и
                с другими наставниками
              </TextRegular>
            </li>
          </UnorderedList>
        </FlexWrapper>
        <FlexWrapper
          gap="20px"
          direction="column"
        >
          <TextLarge blue>
            Как я пойму, что у меня достаточно экспертизы, чтобы делиться знаниями со студентами?
          </TextLarge>
          <TextRegular>
            Школа наставников — это двухнедельный интенсив по коммуникации и управлению командой для IT-специалистов.
            Вы узнаете, как передавать знания и опыт начинающим разработчикам и создавать условия для развития
            самостоятельности своих подопечных. Вас ждёт пять вебинаров в вечернее время продолжительностью 2,5 часа
            и небольшие домашние задания, рассчитанные на 30-60 минут.
          </TextRegular>
        </FlexWrapper>
        <FlexWrapper
          margin="10px 0 0"
        >
          <ButtonPrimary
            onClick={handleOpen}
          >
            <TextSmall>
              Откликнуться
            </TextSmall>
          </ButtonPrimary>
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default VacancyPage;