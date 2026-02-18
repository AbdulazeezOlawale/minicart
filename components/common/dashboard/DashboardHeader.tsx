import React from 'react';
import { ArrowDown, Bell, ChevronDown, Moon } from 'lucide-react';
import { Avatar } from '@mantine/core';
import HeaderAction from '@/components/buttons/headerAction/HeaderAction';
import MiniCartInput from '../input/MiniCartInput';

const DashboardHeader = () => {
  return (
    <header className=" bg-white h-20 w-full border-b border-(--border-color)">
      <div className="flex flex-row items-center justify-between container h-full">
        <MiniCartInput />
        <div className="flex flex-row items-center gap-4">
          <HeaderAction>
            <Moon size={16} color="#190044" strokeWidth={1.5} />
          </HeaderAction>

          <HeaderAction>
            <Bell size={16} color="#190044" strokeWidth={1.5} />
          </HeaderAction>

          <div className="flex flex-row items-center gap-2 cursor-pointer ">
            <HeaderAction>
              <Avatar src="/images/avatar.png" alt="it's me" size={'lg'} />
            </HeaderAction>
            <div className="flex flex-row items-center gap-2">
              <span className="text-(--primary) text-[14px] font-medium capitalize">
                Jane Austin
              </span>
              <ChevronDown size={20} color="#190044" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
