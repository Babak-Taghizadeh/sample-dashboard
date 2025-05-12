import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockEarningsData } from "@/data/mock-earnings";
import { EARNING_TABLE_HEADERS } from "@/lib/constants";
import PLogo from "../../../../public/images/p-logo.png";
import Image from "next/image";
import EarningsPagination from "./earnings-pagination";

const EarningTable = () => {
  return (
    <div className="bg-primary rounded-2xl px-3 pb-4">
      <Table className="border-separate border-spacing-y-3">
        <TableHeader>
          <TableRow>
            {EARNING_TABLE_HEADERS.map((item) => {
              return (
                <TableHead
                  key={item}
                  className="text-muted-foreground px-6 py-5 text-[12px]"
                >
                  {item}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockEarningsData.map((entry, index) => (
            <TableRow key={index}>
              <TableCell className="custom-table-cells flex min-w-[200px] items-center gap-2 rounded-l-xl md:min-w-[400px]">
                <Image src={PLogo} alt="p-logo" width={40} height={40} />
                <span className="font-semibold">{entry.account}</span>
              </TableCell>
              <TableCell className="custom-table-cells">
                {entry.amountIn}
                <span className="custom-table-cells-unit">SUI</span>
              </TableCell>
              <TableCell className="custom-table-cells">
                {entry.amountOut}
                <span className="custom-table-cells-unit">USDC</span>
              </TableCell>
              <TableCell className="custom-table-cells">
                {entry.price}
              </TableCell>
              <TableCell className="custom-table-cells">
                {entry.value}
              </TableCell>
              <TableCell className="custom-table-cells">
                {entry.earnedFee}
              </TableCell>
              <TableCell className="custom-table-cells rounded-r-xl">
                {entry.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EarningsPagination />
    </div>
  );
};

export default EarningTable;
