import React from "react";
import Header from "./header";
import { cn } from "@/lib/utils";
import AppSidebar from "../section/app-sidebar";
import { SidebarProvider } from "../ui/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  className: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className={cn("flex min-h-screen w-full flex-col", className)}>
        <Header />
        <main className="grid flex-grow grid-cols-1 gap-4 p-4 md:grid-cols-12">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
