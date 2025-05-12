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
    <Card className="relative w-full max-w-[460px]">
      <CardHeader className="h-[320px]">
        <ReferRadar />
      </CardHeader>

      <CardContent className="flex flex-col gap-2 items-center px-10 mt-10">
        <h3 className="text-lg font-semibold">
          Refer friends and earn with Patara!
        </h3>
        <p className="text-muted-foreground text-center text-pretty">
          Invite your friends to Patara and earn a share of their on-chain
          rewards forever!
        </p>
      </CardContent>

      <CardFooter className="self-center">
        <Button className="py-6">Connect/Sign In</Button>
      </CardFooter>
    </Card>
  );
};

export default ReferralCard;
