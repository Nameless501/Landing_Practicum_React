import { useLocation } from "react-router-dom";
import { TextRegularBold, TextRegular, TextLarge } from "../assets/styles/Text";
import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { UnorderedList } from "../assets/styles/UnorderedList";
import { TextSpan } from "../assets/styles/StyledSpan";

function VacancyRequirementsDescription({ vacancy }) {
  const location = useLocation();

  return (
    <FlexWrapper
      gap={location.pathname === "/" ? "15px" : "20px"}
      direction="column"
    >
      {
        location.pathname === "/" &&
          <TextRegularBold blue>
            {vacancy.role === 'mentor' ?
              'Я хочу стать наставником. Меня возьмут?' : 'Я хочу стать ревьюером. Меня возьмут?'
            }
          </TextRegularBold>
      }
      {
        location.pathname === "/vacancy" &&
          <TextLarge blue>
            {vacancy.role === 'mentor' ?
              'Я хочу стать наставником. Меня возьмут?' : 'Я хочу стать ревьюером. Меня возьмут?'
            }
          </TextLarge>
      }
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
  );
}

export default VacancyRequirementsDescription;