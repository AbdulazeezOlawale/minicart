import React from 'react';
import { Card, CardSection, Text } from '@mantine/core';
import MiniCard from '@/components/cards/miniCard/MiniCard';
import { dashboardCards } from '@/lib/dashboard-cards';

const DashboardContent = () => {
  return (
    <div className="grid grid-cols-4 gap-3.5">
      {dashboardCards.map((item, index) => (
        <MiniCard key={index}>
          <CardSection>
            <Text>{item.title}</Text>
          </CardSection>
        </MiniCard>
      ))}
    </div>
  );
};

export default DashboardContent;
