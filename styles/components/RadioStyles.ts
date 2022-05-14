import { ComponentStyleConfig } from "@chakra-ui/react";

import theme from "../theme";

// how to use chakra in comparison with css

export const RadioStyles: ComponentStyleConfig = {
  baseStyle: {
    control: {
      _focus: {
        outline: "0px",
        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
      },
      _hover: {
        transform: "scale(1.1)",
      },
    },
  },
  variants: {
    primary: () => ({
      control: {
        width: "20px",
        height: "20px",
        bg: "brand.white",
        borderColor: "brand.gray1",

        _checked: {
          bg: "white",
          color: "brand.gray1",
          borderColor: "brand.gray1",

          _hover: {
            bg: "brand.white",
          },
        },
      },
      label: {
        color: "brand.gray1",
        fontSize: `${theme.custom.font.md}`,
      },
    }),
  },
  defaultProps: {
    variant: "primary",
  },
};
