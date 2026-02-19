import { dashboardCardsType } from "./dashboardCardType";

export const dashboardCards: dashboardCardsType[] = [
  {
    title: 'Total Revenue',
    count: '5,424,326',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#798bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20m5-17H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>`,
    change: 'increment',
    percentageIncrement: '8',
    increaseDuration: 'Increased from last month',
    background: '#ECEFFF',
  },
  {
    title: 'Total Stores',
    count: '5,424,326',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#f9a333" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M2 7h20M2 7v3a2 2 0 0 0 2 2m18-5v3a2 2 0 0 1-2 2M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M4 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 8 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 12 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 16 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 20 12m-5 10v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/></svg>`,
    change: 'decrement',
    percentageIncrement: '2',
    increaseDuration: 'Decreased from last month',
    background: '#FEF3E6',
  },
  {
    title: 'Total Referrals',
    count: '5,424,326',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#c84cad" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4m0 0a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2M4 3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h3m2 13h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2"/></svg>`,
    change: 'increment',
    percentageIncrement: '4',
    increaseDuration: 'Increased from last month',
    background: '#F7E7F5',
  },
  {
    title: 'Total Users',
    count: '5,424,326',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/></svg>`,
    change: 'decrement',
    percentageIncrement: '9',
    increaseDuration: 'Decreased from last month',
    background: '#F7F5FF',
  },
];

export const changeIcon = {
  "increment": {icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#10b981" stroke-linecap="round" stroke-linejoin="round" d="M6 8.667A.667.667 0 0 0 5.333 8H3.374a.667.667 0 0 1-.5-1.207l4.557-4.557a.805.805 0 0 1 1.138 0l4.557 4.557a.667.667 0 0 1-.5 1.207h-1.96a.667.667 0 0 0-.666.667v4a.667.667 0 0 1-.667.666H6.667A.667.667 0 0 1 6 12.667z"/></svg>`, color: "#10B981"},
  "decrement": {icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="#f65d6a" stroke-linecap="round" stroke-linejoin="round" d="M10 7.333a.667.667 0 0 0 .667.667h1.959a.667.667 0 0 1 .5 1.207l-4.557 4.558a.804.804 0 0 1-1.138 0L2.873 9.207a.667.667 0 0 1 .5-1.208h1.96A.667.667 0 0 0 6 7.333v-4a.667.667 0 0 1 .667-.666h2.666a.667.667 0 0 1 .667.666z"/></svg>`, color: "#F65D6A"}
};
