export const SelectStyles = {
  baseStyle: {
    field: {
      border: '1px solid',
      borderColor: 'brand.gray1',
    },
  },
  variants: {
    primary: {
      field: {
        borderRadius: '24px',
        height: '48px',
      },
    },
    country: {
      field: {
        borderRadius: '24px',
        borderRightRadius: '0px',
        height: '48px',
      },
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
};
