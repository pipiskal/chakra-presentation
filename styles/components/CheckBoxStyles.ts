export const CheckBoxStyles = {
  baseStyle: {
    control: { borderColor: 'brand.gray1' },
    label: {
      color: 'brand.gray1',
    },
  },
  variants: {
    primary: {
      control: {
        borderRadius: '5px',

        _checked: {
          bg: 'brand.gray1',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
};
