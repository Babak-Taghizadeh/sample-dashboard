import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ReferRadar from "./refer-radar";

const ReferralCard = () => {
  return (
    <Card className="relative max-w-[460px] overflow-hidden">
      <CardHeader className="h-[320px]">
        <ReferRadar />
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">Referral Program</h3>
        <p className="text-muted-foreground mt-2">
          Invite friends and earn rewards together
        </p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button>
          Connect/Sign In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReferralCard;
