'use client';

import { MoreVertical } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import MiniCard from '@/components/cards/miniCard/MiniCard';

const data = [
  { name: 'Jan', revenue: 220 },
  { name: 'Feb', revenue: 395 },
  { name: 'Mar', revenue: 280 },
  { name: 'Apr', revenue: 340 },
  { name: 'May', revenue: 85 },
  { name: 'Jun', revenue: 170 },
  { name: 'Jul', revenue: 295 },
  { name: 'Aug', revenue: 220 },
  { name: 'Sep', revenue: 370 },
  { name: 'Oct', revenue: 280 },
  { name: 'Nov', revenue: 220 },
  { name: 'Dec', revenue: 320 },
];

const DashboardChart = () => (
  <MiniCard className="p-8!">
    {/* Top Header Row */}
    <div className="flex justify-between items-center mb-6 sm:mb-10">
      <h1 className="text-[24px] font-medium leading-[30px]">Conversion Funnel</h1>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreVertical size={20} />
      </button>
    </div>

    {/* Legend */}
    <div className="flex flex-wrap gap-6 sm:gap-10 lg:gap-x-20 mb-8 sm:mb-12">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="w-3 h-3 rounded-full bg-[#CB1F3F]"></span>
        <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#150b3d]">
          Revenue
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="w-3 h-3 rounded-full bg-[#FFEAEA]"></span>
        <span className="text-sm sm:text-base lg:text-lg font-medium text-[#5D5D5D]">Stores</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="w-3 h-3 rounded-full bg-[#FFEAEA]"></span>
        <span className="text-sm sm:text-base lg:text-lg font-medium text-[#5D5D5D]">
          Referrals
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="w-3 h-3 rounded-full bg-[#FFEAEA]"></span>
        <span className="text-sm sm:text-base lg:text-lg font-medium text-[#5D5D5D]">Users</span>
      </div>
    </div>

    {/* Chart Area */}
    <div className="h-[300px] sm:h-[380px] lg:h-[450px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="0" vertical={false} stroke="#94a3b8" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#150b3d', fontSize: 12, fontWeight: 500 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
            domain={[0, 400]}
            ticks={[0, 100, 200, 300, 400]}
          />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Bar dataKey="revenue" fill="#cc2d4a" radius={[20, 20, 20, 20]} barSize={14} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </MiniCard>
);

export default DashboardChart;
