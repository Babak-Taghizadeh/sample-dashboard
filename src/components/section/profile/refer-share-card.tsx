import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GradientBackground from "@/components/ui/gradient-background";
import ReferRadar from "../refer-radar";

const ReferShareCard = () => {
  return (
    <Card className="relative col-span-9 md:h-full p-0 md:flex-row md:items-center md:justify-between">
      <div className="flex h-full flex-col p-6 md:w-1/2 md:gap-16">
        <CardHeader className="space-y-1 p-0">
          <CardTitle className="text-[32px]">Refer and Earn</CardTitle>
          <CardDescription className="text-muted-foreground text-[16px]">
            Invite your friends to Patara and earn a share of their on-chain
            rewards forever!
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 p-0">
          <div className="bg-secondary flex flex-col space-y-1 rounded-md p-4">
            <p className="text-muted-foreground text-sm">Your Referral Link</p>
            <p className="text-sm font-medium break-all">
              0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="w-full p-6 sm:flex-1/2">Copy Link</Button>
            <Button
              disabled
              className="w-full p-6 sm:flex-1/2"
              variant="secondary"
            >
              Share
            </Button>
          </div>
        </CardContent>
      </div>
      {/* TODO: there is a thin line that needs to be faded  */}
      <div className="relative flex-1 p-6">
        <GradientBackground className="" />
        <ReferRadar />
      </div>
    </Card>
  );
};

export default ReferShareCard;
