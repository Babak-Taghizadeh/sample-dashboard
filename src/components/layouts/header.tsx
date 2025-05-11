// import { Bell, Search, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import Logo from "../../../public/images/patara_logo.png";
// import Shortcut from "../../../public/images/F.png";
import BellIcon from "../../../public/icons/Bell.svg";
import GearIcon from "../../../public/icons/Gear.svg";
import MenuIcon from "../../../public/icons/Menu.svg";
import SearchIcon from "../../../public/icons/Search.svg";
import Shortcut from "../../../public/icons/Shortcut.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <MenuIcon />
        </Button>
        <Image src={Logo} alt="patara-logo" />
      </div>
      <div className="relative w-1/4">
        <SearchIcon className="absolute top-[8px] left-2" size={22} />
        <Input
          className="p-4 pl-10"
          placeholder="Enter Accounts, Platforms, NFTs, Token"
        />
        <Shortcut className="absolute top-[6px] right-2" />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="icon">
          <BellIcon />
        </Button>
        <Button variant="secondary" size="icon">
          <GearIcon />
        </Button>
        <Button>Connect/Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
