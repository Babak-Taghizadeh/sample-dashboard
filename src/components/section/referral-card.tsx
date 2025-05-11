import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const ReferralCard = () => {
  return (
    <Card className="relative w-[460px]">
      <CardHeader></CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button>Connect/Sign In</Button>
      </CardFooter>
    </Card>
  );
};

export default ReferralCard;
