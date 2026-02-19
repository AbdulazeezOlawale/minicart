export type SubLink = {
  name: string;
  path: string;
};

export type MenuItem = {
  name: string;
  id: number;
  path: string;
  default_icon: string;
  active_icon: string;
  sub_link?: SubLink[];
  isOpen?: boolean;
};


export const dashboardMenuLinks: MenuItem[] = [
  {
    name: 'dashboard',
    id: 0,
    path: '/dashboard',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  },
  {
    name: 'revenue',
    id: 1,
    path: '/revenue',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20m5-17H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20m5-17H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>`,
  },
  {
    name: 'location',
    id: 2,
    path: '/location',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5.764a2 2 0 0 1-.894-.211L9.894 3.447A2 2 0 0 0 9 3.237m6 2.527a2 2 0 0 0 .894-.211l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-.894.21m0-15v15m0 0a2 2 0 0 1-.894-.21l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277A2 2 0 0 1 9 3.237m0 0v14.999"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5.764a2 2 0 0 1-.894-.211L9.894 3.447A2 2 0 0 0 9 3.237m6 2.527a2 2 0 0 0 .894-.211l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-.894.21m0-15v15m0 0a2 2 0 0 1-.894-.21l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277A2 2 0 0 1 9 3.237m0-.001v15"/></svg>`,
  },
  {
    name: 'plans',
    id: 3,
    path: '/plans',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4m0 0a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2M4 3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h3m2 13h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4m0 0a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2M4 3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h3m2 13h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2"/></svg>`,
    isOpen: false,
    sub_link: [
      { name: 'add plan', path: '/plans/addplans' },
      { name: 'manage plan', path: '/plans/manageplans' },
    ],
  },
  {
    name: 'stores',
    id: 4,
    path: '/stores',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M2 7h20M2 7v3a2 2 0 0 0 2 2m18-5v3a2 2 0 0 1-2 2M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M4 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 8 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 12 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 16 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 20 12m-5 10v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M2 7h20M2 7v3a2 2 0 0 0 2 2m18-5v3a2 2 0 0 1-2 2M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M4 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 8 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 12 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 16 12a2.7 2.7 0 0 0 1.59-.63.7.7 0 0 1 .82 0A2.7 2.7 0 0 0 20 12m-5 10v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/></svg>`,
    isOpen: false,
    sub_link: [
      { name: 'add stores', path: '/stores/addstores' },
      { name: 'manage stores', path: '/stores/managestores' },
    ],
  },
  {
    name: 'pages',
    id: 5,
    path: '/pages',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/></svg>`,
    isOpen: false,
    sub_link: [
      { name: 'add pages', path: '/pages/addpages' },
      { name: 'manage pages', path: '/pages/managepages' },
    ],
  },
  {
    name: 'media',
    id: 6,
    path: '/media',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2v4a2 2 0 0 0 2 2h4m0 9-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22m6-20H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm-3 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2v4a2 2 0 0 0 2 2h4m0 9-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22m6-20H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm-3 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/></svg>`,
  },
  {
    name: 'users',
    id: 7,
    path: '/users',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/></svg>`,
  },
  {
    name: 'support',
    id: 8,
    path: '/support',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"/></svg>`,
    isOpen: false,
    sub_link: [
      { name: 'support list', path: '/support/list' },
      { name: 'support reply', path: '/support/reply' },
    ],
  },
];

export const dashboardSystemLinks = [
  {
    name: 'profile settings',
    id: 0,
    path: '/profile',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></svg>`,
  },
  {
    name: 'payment gateway',
    id: 1,
    path: '/payment',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 12-7-7v4H3.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C3 9.38 3 9.52 3 9.8v4.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 15 3.52 15 3.8 15H14v4z"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 12-7-7v4H3.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C3 9.38 3 9.52 3 9.8v4.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 15 3.52 15 3.8 15H14v4z"/></svg>`,
  },
  {
    name: 'email templates',
    id: 2,
    path: '/email',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9m-7-7 7 7m-7-7v7h7"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9m-7-7 7 7m-7-7v7h7"/></svg>`,
  },
  {
    name: 'logo management',
    id: 3,
    path: '/logo',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.121 2.121 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  },
  {
    name: 'log out',
    id: 4,
    path: '/logout',
    default_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#190044" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 17 5-5m0 0-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>`,
    active_icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16 17 5-5m0 0-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>`,
  },
];
