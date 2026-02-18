import React, { FC, JSX } from 'react';
import { Moon } from 'lucide-react';
import { ButtonProps, ElementProps } from '@mantine/core';
import BaseButton from '../BaseButton';
import styles from './styles.module.css';

interface HeaderActionButtonProps extends ButtonProps, ElementProps<'button', keyof ButtonProps> {
  labelColor?: string;
  title?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const HeaderAction: FC<HeaderActionButtonProps> = ({ children, ...props }): JSX.Element => {
  return (
    <BaseButton
      {...props}
      classNames={{
        root: styles.root,
      }}
    >
      <div className="flex-none flex items-center justify-center">{children}</div>
    </BaseButton>
  );
};

export default HeaderAction;
