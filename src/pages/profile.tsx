import ReferralStats from "@/components/section/profile/referral-stats";
import ReferralShareCard from "@/components/section/profile/referral-share-card";
import EarningsSection from "@/components/section/profile/earnings-section";

const ProfilePage = () => {
  return (
    <>
      <ReferralShareCard />
      <ReferralStats />
      <EarningsSection />
    </>
  );
};

export default ProfilePage;
