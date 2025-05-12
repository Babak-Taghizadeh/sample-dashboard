import { cn } from "@/lib/utils";
import Gradient from "../../../public/images/gradient.png";
import Image from "next/image";

interface GradientBackgroundProps {
  className?: string;
}

const GradientBackground = ({ className }: GradientBackgroundProps) => {
  return (
    <Image
      src={Gradient}
      alt="Decorative gradient background"
      fill
      priority
      quality={100}
      objectFit="cover"
      className={cn("pointer-events-none select-none", className)}
    />
  );
};

export default GradientBackground;
