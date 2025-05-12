import React from "react";
import EarningTable from "./earnings-table";
import EarningsHeader from "./earnings-header";

const EarningsSection = () => {
  return (
    <div className="col-span-full space-y-5">
      <EarningsHeader />
      <EarningTable />
    </div>
  );
};

export default EarningsSection;
