import { Button, buttonVariants } from "@/components/ui/button";
import BellIcon from "../../../../public/icons/Bell.svg";
import GearIcon from "../../../../public/icons/Gear.svg";
import PLogo from "../../../../public/images/p-logo.png";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const HeaderActions = ({ isInSidebar }: { isInSidebar?: boolean }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={cn(
        "hidden items-center justify-end gap-2 md:flex md:w-1/3",
        isInSidebar && "flex md:hidden",
      )}
    >
      <Button variant="secondary" size="icon">
        <BellIcon />
      </Button>
      <Button variant="secondary" size="icon">
        <GearIcon />
      </Button>
      {pathname === "/profile" ? (
        <Select defaultValue="user">
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Transaction Count" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="user">
                <Image src={PLogo} alt="p-logo" width={25} height={25} />
                <span>@patara.sui</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <Link
          href="/profile"
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
            isInSidebar && "flex-auto",
          )}
        >
          Connect/Sign In
        </Link>
      )}
    </div>
  );
};

export default HeaderActions;
