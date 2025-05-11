import React from "react";
import Header from "./header";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  className: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      <Header />
      <main className="grid flex-grow grid-cols-1 gap-4 px-4 md:grid-cols-12">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
