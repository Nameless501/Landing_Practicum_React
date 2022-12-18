import { SectionWrapper } from "../assets/styles/SectionWrapper";
import { H2, TextRegular } from "../assets/styles/Text";
import { UnorderedList } from '../assets/styles/UnorderedList';
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { TextSpan } from "../assets/styles/StyledSpan";
import RoleCard from "./RoleCard";
import mentor from '../assets/images/mentor.jpg';
import reviewer from '../assets/images/reviewer.jpg';

function ChooseRole() {
  return (
    <SectionWrapper margin='XL' >
      <FlexWrapper
        direction="column"
        gap="40px"
      >
        <H2 as="h2" >
          Выберите роль по душе
        </H2>
        <FlexWrapper
          direction="row"
          gap="20px"
        >
          <RoleCard
            image={mentor}
            title='наставник'
          >
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
                  помогает студентам ставить цели, рефлексировать и делать выводы
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
                  проводит вебинары 2 раза в месяц и дает обратную связь
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
                  делится опытом и мотивирует
                </TextRegular>
              </li>
            </UnorderedList>
          </RoleCard>
          <RoleCard
            image={reviewer}
            title='ревьюер'
          >
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
                  проверяет код и проекты студентов
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
                  простыми словами объясняет им их ошибки и недочеты
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
                  дает корректирующую обратную связь
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
                  оценивает работы — зачёт/незачёт
                </TextRegular>
              </li>
            </UnorderedList>
          </RoleCard>
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
}

export default ChooseRole;