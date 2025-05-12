import ReferralStats from "@/components/section/profile/referral-stats";
import ReferralShareCard from "@/components/section/profile/referral-share-card";
import EarningsSection from "@/components/section/profile/earnings-section";
import Head from "next/head";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Profile - Patara</title>
      </Head>
      <ReferralShareCard />
      <ReferralStats />
      <EarningsSection />
    </>
  );
};

export default ProfilePage;
