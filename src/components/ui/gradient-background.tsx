import Gradient from "../../../public/images/gradient.png";
import Image from "next/image";

interface GradientBackgroundProps {
  height?: string;
}

const GradientBackground = ({ height }: GradientBackgroundProps) => {
  return (
    <Image
      src={Gradient}
      alt="Decorative gradient background"
      fill
      priority
      quality={100}
      objectFit="cover"
      className={`pointer-events-none h-[${height}px]! select-none`}
    />
  );
};

export default GradientBackground;
