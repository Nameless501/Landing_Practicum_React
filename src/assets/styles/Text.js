import styled from "styled-components";

export const Text = styled.p`
  margin: 0;
  padding: 0;
  text-align: ${(props) => props.align};

  &:first-letter {
    text-transform: uppercase;
  }
`

export const H1 = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.h1};
  font-weight: ${({ theme }) => theme.fonts.weight.h1};
  font-size: ${({ theme }) => theme.fonts.size.h1};
  line-height: ${({ theme }) => theme.fonts.lineHeight.h1};
`

export const H2 = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.h2};
  font-weight: ${({ theme }) => theme.fonts.weight.h2};
  font-size: ${({ theme }) => theme.fonts.size.h2};
  line-height: ${({ theme }) => theme.fonts.lineHeight.h2};
`

export const H3 = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.h3};
  font-weight: ${({ theme }) => theme.fonts.weight.h3};
  font-size: ${({ theme }) => theme.fonts.size.h3};
  line-height: ${({ theme }) => theme.fonts.lineHeight.h3};
`

export const TextLarge = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.large};
  font-weight: ${({ theme }) => theme.fonts.weight.large};
  font-size: ${({ theme }) => theme.fonts.size.large};
  line-height: ${({ theme }) => theme.fonts.lineHeight.large};
  color: ${(props) => props.white ?
    props.theme.colors.main.white : props.theme.colors.main.black
  }
`

export const TextRegular = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  font-size: ${({ theme }) => theme.fonts.size.regular};
  line-height: ${({ theme }) => theme.fonts.lineHeight.regular};
  color: ${(props) => props.white ?
    props.theme.colors.main.white : props.gray ?
      props.theme.colors.main.darkGray : props.theme.colors.main.black
  }
`

export const TextRegularBold = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.regularBold};
  font-weight: ${({ theme }) => theme.fonts.weight.regularBold};
  font-size: ${({ theme }) => theme.fonts.size.regularBold};
  line-height: ${({ theme }) => theme.fonts.lineHeight.regularBold};
  color: ${(props) => props.white ?
    props.theme.colors.main.white
      : props.blue ?
        props.theme.colors.main.blue :
        props.theme.colors.main.black
  }
`

export const TextSmall = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.small};
  font-weight: ${({ theme }) => theme.fonts.weight.small};
  font-size: ${({ theme }) => theme.fonts.size.small};
  line-height: ${({ theme }) => theme.fonts.lineHeight.small};
  color: ${(props) => props.white ?
    props.theme.colors.main.white : props.theme.colors.main.black
  }
`

export const TextExtraSmall = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.extraSmall};
  font-weight: ${({ theme }) => theme.fonts.weight.extraSmall};
  font-size: ${({ theme }) => theme.fonts.size.extraSmall};
  line-height: ${({ theme }) => theme.fonts.lineHeight.extraSmall};
  color: ${(props) => props.white ?
    props.theme.colors.main.white : props.theme.colors.main.black
  }
`

export const TextRadio = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.radio};
  font-weight: ${({ theme }) => theme.fonts.weight.radio};
  font-size: ${({ theme }) => theme.fonts.size.radio};
  line-height: ${({ theme }) => theme.fonts.lineHeight.radio};
`

export const TextRadioSmall = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.radioSmall};
  font-weight: ${({ theme }) => theme.fonts.weight.radioSmall};
  font-size: ${({ theme }) => theme.fonts.size.radioSmall};
  line-height: ${({ theme }) => theme.fonts.lineHeight.radioSmall};
`

export const TextInput = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.family.input};
  font-weight: ${({ theme }) => theme.fonts.weight.input};
  font-size: ${({ theme }) => theme.fonts.size.input};
  line-height: ${({ theme }) => theme.fonts.lineHeight.input};
  color: ${(props) => props.error ?
    props.theme.colors.service.error : props.theme.colors.main.black
  }
`