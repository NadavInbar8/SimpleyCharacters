export interface IconProps {
  src: string;
  type: string;
  size?: string | number;
  color?: string; // was 'color: string'
  hoverColor?: string; // was 'hoverColor: string'
  withStates?: boolean; // was 'withStates: boolean'
  $center?: boolean;
  spin?: boolean;
  blink?: boolean;
  className?: string;
  onClick?: ((e: React.UIEvent) => void) | null;
  alt?: string;
  active?: boolean;
}

export interface IProps {
  size?: string | number;
  color?: string;
  hoverColor?: string;
  withStates?: boolean;
  active?: boolean;
  alt?: string;
  className?: string;
}
