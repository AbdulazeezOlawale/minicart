'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { DefaultLayout } from '@/config/types/generic';
import DashboardHeader from './DashboardHeader';
import SideBar from './SideBar';

const DashboardWrapper = ({ children }: DefaultLayout) => {
  const pathName = usePathname();

  const segments = pathName.split('/').filter(Boolean);

  const pageHeader = segments[segments.length - 1];

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <SideBar />

      <div className="flex flex-col flex-1 h-full">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-(--background)">
          <section className="container py-6 flex flex-col gap-8">
            <header>
              <h1 className="text-xl font-semibold dashboard_header">{pageHeader}</h1>
              <span className="flex flex-row items-center gap-3">
                <span className="dashboard_header_link">Home</span>
                {segments.map((item, index) => (
                  <span key={index} className="flex flex-row items-center justify-center gap-3">
                    <ChevronRight size={12} className="" />
                    <span className="dashboard_header_link text-(--secondary)!">{item}</span>
                  </span>
                ))}
              </span>
            </header>

            {children}
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
