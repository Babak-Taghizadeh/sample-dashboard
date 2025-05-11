import Image from "next/image";
import Logo from "../../../public/images/patara_logo.png";
import { SidebarTrigger } from "../ui/sidebar";
import HeaderTools from "./header-tools";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <div className="flex w-full items-center justify-between gap-2 md:w-auto">
        <SidebarTrigger />
        <Image src={Logo} alt="patara-logo" />
      </div>
      <div className="hidden w-full flex-row-reverse items-center md:flex">
        <HeaderTools />
      </div>
    </header>
  );
};

export default Header;
