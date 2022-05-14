import theme from "../theme";

export const InputStyles = {
  baseStyle: {
    field: {
      border: "1px solid",
      color: "brand.gray1",
    },
  },
  sizes: {
    sm: () => ({
      field: {
        width: "144px",
        height: "48px",
        fontSize: `${theme.custom.font.md}`,
      },
    }),
    md: () => ({
      field: {
        width: "200px",
        height: "48px",
        fontSize: `${theme.custom.font.md}`,
      },
    }),
    lg: () => ({
      field: {
        width: "100%",
        height: "48px",
        fontSize: `${theme.custom.font.md}`,
      },
    }),
  },
  variants: {
    primary: {
      field: {
        borderRadius: "24px",
      },
    },
    phone: {
      field: {
        borderRadius: "24px",
      },
      addon: {
        padding: "0px",
        height: "48px",
      },
    },
    date: () => ({
      field: {
        borderRadius: "24px",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: `${theme.custom.font.md}`,
      },
    }),
    password: {
      field: {
        borderRight: "none",
        borderRadius: "24px",
      },
      addon: {
        border: "1px solid",
        borderRadius: "24px",
        height: "48px",
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: "primary",
  },
};
