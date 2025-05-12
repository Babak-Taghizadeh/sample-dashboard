import { Button } from "@/components/ui/button";
import ReferralStatCard from "./referral-stat-card";
import HandCoinsIcon from "../../../../public/icons/handcoin.svg";
import StarIcon from "../../../../public/icons/star.svg";
import GiftIcon from "../../../../public/icons/gift.svg";
import AvatarIcon from "../../../../public/icons/avatar.svg";

const ReferralStats = () => {
  return (
    <div className="flex flex-col gap-4 md:col-span-3 md:justify-between">
      <ReferralStatCard
        icon={<HandCoinsIcon />}
        label="Total Earned Fee"
        value="$1,000.00"
      />
      <ReferralStatCard
        icon={<StarIcon />}
        label="Unclaimed Fee"
        value="$500.00"
        action={<Button className="w-fit">Claim</Button>}
      />
      <ReferralStatCard
        icon={<GiftIcon />}
        label="Total Referral Points"
        value="1289"
      />
      <ReferralStatCard icon={<AvatarIcon />} label="Referrals" value="34" />
    </div>
  );
};

export default ReferralStats;
