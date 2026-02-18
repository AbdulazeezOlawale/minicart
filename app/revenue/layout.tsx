// app/dashboard/layout.tsx

import DashboardWrapper from "@/components/common/dashboard/DashboardWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}