import { Card, CardProps, ElementProps } from '@mantine/core'
import React, { FC, JSX } from 'react'

interface BaseCardProps extends CardProps{
  children: React.ReactNode;
}

const BaseCard: FC<BaseCardProps> = ({ children, ...props }): JSX.Element =>  {
  return (
    <Card {...props}>{children}</Card>
  )
}

export default BaseCard
