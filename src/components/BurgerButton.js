import { StyledBurgerButton } from "../assets/styles/Button";

function BurgerButton({ handleClick }) {
  return (
    <StyledBurgerButton
      onClick={handleClick}
    >
      <div />
      <div />
      <div />
    </StyledBurgerButton>
  );
}

export default BurgerButton;