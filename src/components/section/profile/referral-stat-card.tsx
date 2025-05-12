import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  action?: ReactNode;
};

const ReferralStatCard = ({ icon, label, value, action }: StatCardProps) => {
  return (
    <Card className="flex-row items-center justify-between rounded-xl p-4">
      <div className="flex items-center gap-4">
        <div className="bg-secondary flex h-10 w-10 items-center justify-center rounded-md">
          {icon}
        </div>
        <div>
          <p className="text-muted-foreground text-sm">{label}</p>
          <p className="text-xl font-semibold">{value}</p>
        </div>
      </div>
      {action}
    </Card>
  );
};

export default ReferralStatCard;
