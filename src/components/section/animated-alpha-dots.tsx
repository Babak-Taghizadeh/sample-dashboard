import { motion } from "framer-motion";
import Image from "next/image";
import AlphaDots from "../../../public/images/alpha-dots.png";

interface AnimatedAlphaDotsProps {
  Content: React.ReactNode;
}

const AnimatedAlphaDots = ({ Content }: AnimatedAlphaDotsProps) => {
  return (
    <div className="relative col-span-12 h-full overflow-hidden md:p-10">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bottom-0"
      >
        <Image
          src={AlphaDots}
          alt="background dots"
          fill
          priority
          quality={100}
          objectFit="contain"
          className="select-none"
          placeholder="blur"
        />
      </motion.div>
      <div className="flex h-full w-full items-center justify-center">
        {Content}
      </div>
    </div>
  );
};

export default AnimatedAlphaDots;
