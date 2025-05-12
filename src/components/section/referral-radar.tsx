import { motion } from "motion/react";
import Image from "next/image";
import Letters from "../../../public/images/letters.png";
import PLogo from "../../../public/images/p-logo.png";

const ReferralRadar = () => {
  return (
    <div className="relative row-span-full flex h-[320px] items-center justify-center overflow-hidden">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={Letters}
          alt="Decorative letter pattern"
          fill
          quality={100}
          className="select-none object-contain"
        />
      </motion.div>
      <Image
        src={PLogo}
        alt="P logo"
        width={83}
        height={83}
        quality={100}
        className="z-10 select-none"
        placeholder="blur"
      />
    </div>
  );
};

export default ReferralRadar;
