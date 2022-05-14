import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

import { ButtonStyles as Button } from "../styles/components/ButtonStyles";
import { ModalStyles as Modal } from "./components/ModalStyles";
// import { CheckBoxStyles as Checkbox } from "./components/CheckBoxStyles";
// import { InputStyles as Input } from "./components/InputStyles";
// import { RadioStyles as Radio } from "./components/RadioStyles";
// import { SelectStyles as Select } from "./components/SelectStyles";

const theme = extendTheme({
  ...baseTheme,

  styles: {
    global: {
      "body, html": {
        bg: "gray.500",
        color: "black",
      },
    },
  },

  // WHAT YOU CAN OVVERIDE IS IN THE THEME OBJECT UNDER COMPONENTS

  // WHEN YOU OVERRIDE THE COMPONENT IT WILL USE THE CUSTOM FILE FROM NOW ON
  components: {
    // Button,
    Modal,
    // Checkbox,
    // Radio,
    // Select,
    // Input,
  },
  fonts: {
    body: "Roboto, sans-serif",
  },
  colors: {
    brand: {
      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",
      gray1: "rgb(51, 56, 62)",
      gray2: "rgb(71, 76, 81)",
      gray3: "rgb(97, 97, 97)",
      gray4: "rgb(146, 148, 158)",
      gray5: "(220, 220, 220)",
      gray6: "rgb(242, 243, 247)",
    },
  },

  custom: {
    font: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      xxl: "32px",
      xxxl: "48px",
    },
    space: {
      sm: "4px",
      md: "8px",
      lg: "16px",
      xl: "24px",
      xxl: "32px",
      xxxl: "64px",
      xxxxl: "128px",
    },
  },
});

export default theme;
