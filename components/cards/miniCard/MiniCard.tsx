import React, { FC, JSX } from 'react';
import { Card, CardProps, ElementProps } from '@mantine/core';
import BaseCard from '../BaseCard';
import styles from './styles.module.css';

interface BaseCardProps extends CardProps {
  children: React.ReactNode;
}

const MiniCard: FC<BaseCardProps> = ({ children, ...props }): JSX.Element => {
  return (
    <BaseCard {...props} classNames={{ root: `${styles.mini_card_root}` }}>
      {children}
    </BaseCard>
  );
};

export default MiniCard;
