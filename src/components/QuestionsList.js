import { FlexWrapper } from "../assets/styles/FlexWrapper";
import Dropdown from "./Dropdown";
import { Divider } from "../assets/styles/Divider";
import { UnorderedList } from '../assets/styles/UnorderedList';
import QuestionAnswer from "./QuestionAnswer";

function QuestionsList() {
  return (
    <FlexWrapper
      direction="column"
    >
      <Divider />
      <UnorderedList
        direction="column"
        align="stretch"
      >
        <li>
          <Dropdown
            name="Как я пойму, что у меня достаточно опыта, чтобы делиться знаниями с людьми?"
          >
            <QuestionAnswer >
              Мы в первую очередь ценим практический опыт с теми технологиями, которые изучают на наших курсах.
              Нам важно, чтобы наставники делились с группой настоящими рабочими кейсами, поэтому экспертами
              становятся специалисты уровня мидл и старше.
            </QuestionAnswer>
          </Dropdown>
          <Divider />
        </li>
        <li>
          <Dropdown
            name="Какой график и формат работы?"
          >
            <QuestionAnswer >
              Мы в первую очередь ценим практический опыт с теми технологиями, которые изучают на наших курсах.
              Нам важно, чтобы наставники делились с группой настоящими рабочими кейсами, поэтому экспертами
              становятся специалисты уровня мидл и старше.
            </QuestionAnswer>
          </Dropdown>
          <Divider />
        </li>
        <li>
          <Dropdown
            name="Какой доход возможно получать?"
          >
            <QuestionAnswer >
              Мы в первую очередь ценим практический опыт с теми технологиями, которые изучают на наших курсах.
              Нам важно, чтобы наставники делились с группой настоящими рабочими кейсами, поэтому экспертами
              становятся специалисты уровня мидл и старше.
            </QuestionAnswer>
          </Dropdown>
          <Divider />
        </li>
        <li>
          <Dropdown
            name="Есть ли какие-то плюшки или бонусы?"
          >
            <QuestionAnswer >
              Мы в первую очередь ценим практический опыт с теми технологиями, которые изучают на наших курсах.
              Нам важно, чтобы наставники делились с группой настоящими рабочими кейсами, поэтому экспертами
              становятся специалисты уровня мидл и старше.
            </QuestionAnswer>
          </Dropdown>
          <Divider />
        </li>
      </UnorderedList>
    </FlexWrapper>
  );
}

export default QuestionsList;