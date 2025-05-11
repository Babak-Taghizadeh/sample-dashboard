import { SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "../../../../public/images/patara_logo.png";
import Image from "next/image";

const HeaderMenuLogo = () => {
  return (
    <div className="flex w-full items-center justify-between gap-4 md:w-1/3 md:justify-start">
      <SidebarTrigger />
      <Image src={Logo} alt="patara-logo" />
    </div>
  );
};

export default HeaderMenuLogo;
