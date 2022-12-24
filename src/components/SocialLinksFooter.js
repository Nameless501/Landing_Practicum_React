import { FlexWrapper } from "../assets/styles/FlexWrapper";
import { TextRegular } from "../assets/styles/Text";
import { NavLink } from "../assets/styles/Link";
import SocialLinkFooter from "./SocialLinkFooter";

function SocialLinksFooter() {
  return (
    <FlexWrapper
      padding="2px 0"
      gap="15px"
      direction="row"
      align="center"
      area="social"
    >
      <NavLink
        link="https://thecode.media/"
        blank
      >
        <TextRegular>
          Журнал
        </TextRegular>
      </NavLink>
      <SocialLinkFooter
        link="https://t.me/yandex"
        width="32"
        height="32"
        widthMobile="24"
        viewBox="0 0 32 32"
      >
        <path className="styled-path" d="M15.9995 0.800049C7.60907 0.800049 0.799469 7.60965 0.799469 16C0.799469 24.3904 7.60907 31.2 15.9995 31.2C24.3899 31.2 31.1995 24.3904 31.1995 16C31.1995 7.60965 24.3899 0.800049 15.9995 0.800049ZM23.0523 11.136C22.8243 13.5376 21.8363 19.3744 21.3347 22.0648C21.1219 23.2048 20.6963 23.5848 20.3011 23.6304C19.4195 23.7064 18.7507 23.0528 17.8995 22.4904C16.5619 21.6088 15.8019 21.0616 14.5099 20.2104C13.0051 19.2225 13.9779 18.6752 14.8443 17.7936C15.0723 17.5656 18.9635 14.024 19.0395 13.7048C19.05 13.6565 19.0486 13.6063 19.0354 13.5586C19.0221 13.511 18.9974 13.4672 18.9635 13.4312C18.8723 13.3552 18.7507 13.3856 18.6443 13.4008C18.5075 13.4312 16.3795 14.8448 12.2299 17.6416C11.6219 18.052 11.0747 18.2648 10.5883 18.2496C10.0411 18.2344 9.00747 17.9456 8.23227 17.6872C7.27467 17.3832 6.52987 17.216 6.59067 16.684C6.62107 16.4104 7.00107 16.1368 7.71547 15.848C12.1539 13.9176 15.1027 12.6408 16.5771 12.0328C20.8027 10.2696 21.6691 9.96565 22.2467 9.96565C22.3683 9.96565 22.6571 9.99605 22.8395 10.148C22.9915 10.2696 23.0371 10.4368 23.0523 10.5584C23.0371 10.6496 23.0675 10.9232 23.0523 11.136Z" fill="black" />
      </SocialLinkFooter>
      <SocialLinkFooter
        link="https://vk.com/yandex"
        width="32"
        height="32"
        widthMobile="24"
        viewBox="0 0 32 32"
      >
        <path className="styled-path" d="M15.9995 0.800049C7.60464 0.800049 0.799469 7.60522 0.799469 16C0.799469 24.3949 7.60464 31.2 15.9995 31.2C24.3943 31.2 31.1995 24.3949 31.1995 16C31.1995 7.60522 24.3943 0.800049 15.9995 0.800049ZM21.8451 17.9491C21.8451 17.9491 23.1894 19.276 23.5203 19.8919C23.5298 19.9045 23.5346 19.9172 23.5377 19.9235C23.6723 20.15 23.704 20.3257 23.6375 20.4571C23.5266 20.6756 23.1466 20.7833 23.0168 20.7928H20.6418C20.4771 20.7928 20.132 20.75 19.714 20.4619C19.3926 20.237 19.0759 19.8681 18.7671 19.5087C18.3064 18.9735 17.9074 18.5112 17.5052 18.5112C17.4541 18.5111 17.4034 18.5191 17.3548 18.535C17.0508 18.6331 16.6613 19.067 16.6613 20.2228C16.6613 20.5838 16.3763 20.7912 16.1752 20.7912H15.0875C14.717 20.7912 12.7869 20.6614 11.0769 18.858C8.98372 16.6492 7.09955 12.219 7.08372 12.1779C6.96497 11.8913 7.21039 11.7377 7.47797 11.7377H9.87672C10.1966 11.7377 10.3011 11.9325 10.3739 12.105C10.4594 12.3061 10.7729 13.1057 11.2875 14.005C12.1219 15.4712 12.6333 16.0665 13.0434 16.0665C13.1203 16.0656 13.1958 16.0461 13.2635 16.0095C13.7986 15.7119 13.6989 13.804 13.6751 13.4081C13.6751 13.3337 13.6736 12.5547 13.3996 12.181C13.2033 11.9103 12.8692 11.8074 12.6666 11.7694C12.7486 11.6562 12.8567 11.5644 12.9816 11.5018C13.349 11.3181 14.0108 11.2912 14.6679 11.2912H15.0336C15.7461 11.3007 15.9298 11.3466 16.1879 11.4115C16.7104 11.5366 16.7215 11.8739 16.6756 13.0281C16.6613 13.3559 16.6471 13.7264 16.6471 14.1634C16.6471 14.2584 16.6423 14.3597 16.6423 14.4674C16.6265 15.0548 16.6075 15.7214 17.0223 15.9953C17.0764 16.0292 17.1389 16.0473 17.2028 16.0475C17.3469 16.0475 17.7807 16.0475 18.9556 14.032C19.3179 13.3832 19.6327 12.7091 19.8976 12.0148C19.9214 11.9736 19.9911 11.847 20.0734 11.7979C20.1341 11.7669 20.2015 11.7511 20.2697 11.752H23.0896C23.3968 11.752 23.6074 11.7979 23.647 11.9166C23.7166 12.105 23.6343 12.6798 22.3471 14.423L21.7723 15.1815C20.6054 16.711 20.6054 16.7885 21.8451 17.9491Z" fill="black" />
      </SocialLinkFooter>
    </FlexWrapper>
  );
}

export default SocialLinksFooter;