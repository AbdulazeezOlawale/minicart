import React from 'react';
import { Card, CardSection, Text } from '@mantine/core';
import MiniCard from '@/components/cards/miniCard/MiniCard';
import { changeIcon, dashboardCards } from '@/lib/dashboard-cards';
import { dashboardCardsType } from '@/lib/dashboardCardType';
import DashboardChart from './DashboardChart';

const DashboardContent = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="grid grid-cols-4 gap-3.5">
        {dashboardCards.map((item: dashboardCardsType, index: number) => (
          <MiniCard key={index}>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between">
                <span className="font-normal text-[16px] leading-[22px] text-[#5D5D5D]">
                  {item.title}
                </span>

                <span
                  className={`flex items-center justify-center size-12 rounded-full`}
                  style={{ backgroundColor: item.background }}
                  dangerouslySetInnerHTML={{
                    __html: item.icon,
                  }}
                ></span>
              </div>

              <span className="text-[30px] font-medium leading-[100%]">{item.count}</span>
            </div>

            <div className="flex flex-row justify-between p-4 border-t border-[#D7D7D7]">
              <div
                className={`flex flex-row items-center gap-1 justify-center h-6 p-1! rounded-lg bg-(--shade-tint)`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: changeIcon[item.change].icon,
                  }}
                ></span>

                <span
                  className="text-[12px] font-medium leading-[100%]"
                  style={{ color: changeIcon[item.change].color }}
                >
                  +{item.percentageIncrement}%
                </span>
              </div>

              <span className="text-[12px] font-normal leading-[17px]">
                {item.increaseDuration}
              </span>
            </div>
          </MiniCard>
        ))}
      </div>

      <DashboardChart />
    </section>
  );
};

export default DashboardContent;
