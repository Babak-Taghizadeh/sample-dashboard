import { motion } from "motion/react";
import Image from "next/image";
import AlphaDots from "../../../public/images/alpha-dots.png";

interface AnimatedAlphaDotsProps {
  Content: React.ReactNode;
}

const AnimatedAlphaDots = ({ Content }: AnimatedAlphaDotsProps) => {
  return (
    <div className="relative col-span-12 row-span-full overflow-hidden md:p-16">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={AlphaDots}
          alt="background dots"
          fill
          priority
          quality={100}
          className="select-none"
          placeholder="blur"
        />
      </motion.div>
      <div className="flex h-full w-full items-center justify-center object-contain">
        {Content}
      </div>
    </div>
  );
};

export default AnimatedAlphaDots;
