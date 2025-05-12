import ProfileDetails from "@/components/section/profile/referral-stats";
import ReferShareCard from "@/components/section/profile/refer-share-card";
import EarningsSection from "@/components/section/profile/earnings-section";

const ProfilePage = () => {
  return (
    <>
      <ReferShareCard />
      <ProfileDetails />
      <EarningsSection />
    </>
  );
};

export default ProfilePage;
