import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ReferRadar from "./refer-radar";
import GradientBackground from "../ui/gradient-background";

const ReferralCard = () => {
  return (
    <Card className="relative w-full max-w-[460px] gap-4 py-4 sm:gap-10 sm:py-10">
      <CardHeader className="max-h-[360px]">
        <GradientBackground height="440" />
        <ReferRadar />
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-2 px-6 sm:mt-6">
        <h3 className="text-center text-xl font-semibold text-pretty sm:text-2xl">
          Refer friends and earn with Patara!
        </h3>
        <p className="text-muted-foreground px-4 text-center text-pretty">
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
