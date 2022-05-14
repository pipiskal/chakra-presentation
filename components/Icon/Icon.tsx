import { Wrapper } from './Icon.styles';

// we will add more later
export type IconTypes =
  | 'add'
  | 'upload'
  | 'pause'
  | 'sendInvite'
  | 'cancel'
  | 'instagram'
  | 'twitter'
  | 'youtube'
  | 'google'
  | 'apple'
  | 'eyeShow'
  | 'eyeHide'
  | 'edit';

export type IconOptionsType = {
  color: {
    lightGray: string;
    gray: string;
    black: string;
    white: string;
  };
  size: {
    xs: { width: number; height: number };
    sm: { width: number; height: number };
    md: { width: number; height: number };
    lg: { width: number; height: number };
  };
};

const icons: { [key in IconTypes]: string } = {
  add: '/icons/plus.svg',
  upload: '/icons/upload.svg',
  pause: '/icons/pause.svg',
  sendInvite: '/icons/sendInvite.svg',
  cancel: '/icons/cancel.svg',
  instagram: '/icons/instagram.svg',
  twitter: '/icons/twitter.svg',
  youtube: '/icons/youtube.svg',
  google: '/icons/google.svg',
  apple: '/icons/apple.svg',
  eyeShow: '/icons/eyeShow.svg',
  eyeHide: '/icons/eyeHide.svg',
  edit: '/icons/edit.svg',
};

type IconProps = {
  type: IconTypes;
  size: keyof IconOptionsType['size'];
  spacingRight?: boolean;
  color?: keyof IconOptionsType['color'];
  className?: string;
};

const Icon = ({
  type,
  size = 'sm',
  className,
  color = 'black',
  spacingRight = false,
}: IconProps): JSX.Element => (
  <Wrapper
    src={icons[type]}
    size={size}
    className={className}
    color={color}
    spacingRight={spacingRight}
  />
);

export default Icon;
