'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Logo from '@/assets/icons/Logo';
import { dashboardMenuLinks, dashboardSystemLinks, MenuItem } from '@/lib/route-links';


const SideBar = () => {
  const location = usePathname();

  const [menuState, setMenuState] = React.useState<MenuItem[]>(dashboardMenuLinks);

  const toggleSubList = (index: number) => {
    setMenuState((prev) =>
      prev.map((item, i) =>
        i === index && item.sub_link ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <aside className="sticky max-w-[310px] h-dvh block bg-white border-r border-(--border-color) overflow-hidden">
      <div className="h-full w-full px-4 py-4 flex flex-col gap-8 overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {/* Logo */}
        <section>
          <Logo />
        </section>

        {/* MENU */}
        <section className="flex flex-col gap-4">
          <span className="text-(--primary-tint) uppercase text-sm">MENU</span>

          <ul className="flex-1 flex flex-col gap-1">
            {menuState.map((item, index) => (
              <li key={item.id}>
                <Link
                  href={item.sub_link ? '' : item.path}
                  className={`flex items-center justify-between px-4 py-[13px] w-full z-50 rounded-xl ${
                    !item.sub_link && location.includes(item.path)
                      ? 'bg-(--primary) text-white'
                      : 'bg-transparent text-(--primary) hover:bg-(--shade-tint) transition-all ease-in-out'
                  }`}
                  onClick={() => item.sub_link && toggleSubList(index)}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="size-6"
                      dangerouslySetInnerHTML={{
                        __html: location.includes(item.path) ? item.active_icon : item.default_icon,
                      }}
                    />

                    <span className="side_bar_nav_btn_text max-lg:hidden capitalize">
                      {item.name}
                    </span>
                  </div>

                  {item.sub_link && (
                    <ChevronRight
                      className={`transition-all ease-in-out ${
                        item.isOpen ? 'rotate-90' : 'rotate-0'
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <div
                  className={`grid transition-all duration-300 ease-in-out relative ${
                    item.isOpen
                      ? 'grid-rows-[1fr] opacity-100 mt-1'
                      : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  {item.sub_link && (
                    <span className="block absolute top-0 left-5 h-full w-0.5 bg-gray-200"></span>
                  )}

                  <ul className="overflow-hidden flex flex-col gap-2 pl-8">
                    {item.sub_link?.map((subLinkItem, idx) => (
                      <li key={idx}>
                        <Link
                          href={subLinkItem.path}
                          className={`w-full block px-3 py-2 capitalize text-sm font-semibold hover:bg-(--shade-tint) transition-all rounded-xl ease-in-out ${
                            location.includes(subLinkItem.path)
                              ? 'bg-blue-600 text-white'
                              : 'bg-transparent text-gray-700'
                          }`}
                        >
                          {subLinkItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* SYSTEM */}
        <section className="flex flex-col gap-4">
          <span className="text-(--primary-tint) uppercase">system</span>

          <ul className="flex-1">
            {dashboardSystemLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`flex items-center gap-4 p-3 rounded-xl w-full hover:bg-[#F7F5FF] transition-all ease-in-out ${
                    location.includes(item.path)
                      ? 'bg-(--primary) text-white'
                      : 'bg-transparent text-(--primary)'
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: location.includes(item.path) ? item.active_icon : item.default_icon,
                    }}
                  />
                  <span className="max-lg:hidden text-sm capitalize font-semibold">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
};

export default SideBar;