import React, { FC, JSX } from 'react';
import { Button, ButtonProps, ElementProps } from '@mantine/core';

interface BaseButtonProps extends ButtonProps, ElementProps<'button', keyof ButtonProps> {
  labelColor?: string;
  title?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const BaseButton: FC<BaseButtonProps> = ({ title, type, children, ...props }): JSX.Element => {
  return (
    <Button {...props} type={type} variant={props.variant || "default"} title={title}>
      {children}
    </Button>
  );
};

export default BaseButton;
