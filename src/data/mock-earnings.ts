import { EarningEntry } from "@/lib/types";

export const mockEarningsData: EarningEntry[] = Array(10).fill({
  account: "0x1f20e..e0266",
  amountIn: "1,000.00",
  amountOut: "2,500.00",
  price: "$2.50",
  value: "$2,500.00",
  earnedFee: "$0.05",
  time: "1 day ago",
});
