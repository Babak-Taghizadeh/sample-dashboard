import AnimatedAlphaDots from "@/components/section/animated-alpha-dots";
import ReferralCard from "@/components/section/referral-card";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Referral & Earnings Dashboard</title>
      </Head>
      <AnimatedAlphaDots Content={<ReferralCard />} />
    </>
  );
}
