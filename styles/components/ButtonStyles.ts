import { ButtonProps } from "@chakra-ui/react";

import theme from "../theme";

// conditionally adding styles depending on props.

export const ButtonStyles = {
  baseStyle: (props: ButtonProps) => ({
    fontWeight: 600,
    borderRadius: "24px",
    // if leftIcon adding gap - if not it will spead an empty object so nothing will happenn
    // https://codeandsuch.github.io/conditional-array-object-literals/
    ...(props.leftIcon ? { gap: "10px" } : {}),
    ...(props.rightIcon ? { gap: "10px" } : {}),
    height: "60px",
  }),

  // overriding the default chakra sizes

  sizes: {
    xxs: {
      width: "24px",
      height: "24px",
    },
    xs: { width: "32px", height: "32px" },
    sm: { width: "46px", height: "46px" },

    // ReferenceError:
    // Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization

    // If we try to use the theme directly without converting it to a function
    // it will complain with the above error - meaning the global theme object
    // is not yet innitialized

    // md: {
    //   width: "200px",
    //   fontSize: `${theme.custom.font.md}`,
    //   height: "48px",
    // },

    md: () => ({
      width: "200px",
      fontSize: `${theme.custom.font.md}`,
      height: "48px",
    }),
    lg: () => ({
      width: "256px",
      fontSize: `${theme.custom.font.md}`,
      height: "48px",
    }),
    xl: () => ({
      width: "312px",
      fontSize: `${theme.custom.font.md}`,
      height: "48px",
    }),
    xxl: () => ({
      width: "100%",
      fontSize: `${theme.custom.font.md}`,
      height: "48px",
    }),
  },
  variants: {
    primary: {
      border: `2px solid`,
      borderColor: "brand.gray1",
      bg: "brand.gray1",
      color: "brand.white",
    },
    primaryOutlined: {
      border: `2px solid`,
      borderColor: "brand.gray1",
      color: "brand.gray1",
    },
    primaryReversed: {
      border: `2px solid`,
      borderColor: "brand.white",
      bg: "brand.white",
      color: "brand.gray1",
    },
    secondary: {
      border: `2px solid`,
      borderColor: "brand.gray2",
      bg: "brand.gray2",
      color: "brand.white",
    },
    secondaryOutlined: {
      border: `2px solid`,
      borderColor: "brand.gray2",
      color: "brand.gray2",
    },
    primaryIcon: {
      backgroundColor: `brand.gray2`,
    },
    secondaryIcon: {
      backgroundColor: "brand.white",
    },
  },
  defaultProps: {
    // size: "md",
    // variant: "primary",
  },
};
