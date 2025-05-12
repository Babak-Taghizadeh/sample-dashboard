import { motion } from "motion/react";
import Image from "next/image";
import Letters from "../../../public/images/letters.png";
import Gradient from "../../../public/images/gradient.png";
import PLogo from "../../../public/images/p-logo.png";

const ReferRadar = () => {
  return (
    <div className="relative row-span-full flex h-full items-center justify-center">
      <Image
        src={Gradient}
        alt="Decorative gradient background"
        fill
        priority
        quality={100}
        objectFit="contain"
        className="select-none"
        placeholder="blur"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src={Letters}
          alt="Decorative letter pattern"
          fill
          objectFit="contain"
          quality={100}
          className="select-none"
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

export default ReferRadar;
