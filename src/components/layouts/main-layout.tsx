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
        <main className="grid grid-cols-1 gap-y-8 p-4 md:grid-cols-12 md:grid-rows-[400px_auto] md:gap-4 md:gap-y-12">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
