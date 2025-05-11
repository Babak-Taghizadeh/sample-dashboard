import { Input } from "@/components/ui/input";
import SearchIcon from "../../../../public/icons/Search.svg";
import Shortcut from "../../../../public/icons/Shortcut.svg";
import { cn } from "@/lib/utils";

const HeaderInput = ({ isInSidebar }: { isInSidebar?: boolean }) => {
  return (
    <div
      className={cn(
        "relative hidden w-full shrink-0 md:block md:w-1/3 lg:w-[460px]",
        isInSidebar && "block md:hidden",
      )}
    >
      <SearchIcon className="absolute top-[8px] left-2" size={22} />
      <Input
        className="p-4 pl-8"
        placeholder="Enter Accounts, Platforms, NFTs, Token"
      />
      <Shortcut className="absolute top-[6px] right-2" />
    </div>
  );
};

export default HeaderInput;
