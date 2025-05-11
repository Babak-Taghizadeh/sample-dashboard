import BellIcon from "../../../public/icons/Bell.svg";
import GearIcon from "../../../public/icons/Gear.svg";
import SearchIcon from "../../../public/icons/Search.svg";
import Shortcut from "../../../public/icons/Shortcut.svg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const HeaderTools = () => {
  return (
    <>
      <div className="relative mx-auto w-full md:w-[40%] 2xl:w-1/4">
        <SearchIcon className="absolute top-[8px] left-2" size={22} />
        <Input
          className="p-4 pl-8"
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
        <Button className="flex-1">Connect/Sign In</Button>
      </div>
    </>
  );
};

export default HeaderTools;
