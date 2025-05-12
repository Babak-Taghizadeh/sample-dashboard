import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const EarningsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-medium pl-2">Earnings</h3>
      <Tabs defaultValue="1W">
        <TabsList>
          <TabsTrigger value="1D">1D</TabsTrigger>
          <TabsTrigger value="1W">1W</TabsTrigger>
          <TabsTrigger value="1M">1M</TabsTrigger>
          <TabsTrigger value="1Y">1Y</TabsTrigger>
          <TabsTrigger value="ALL">ALL</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default EarningsHeader;
