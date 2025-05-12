import { Button, buttonVariants } from "@/components/ui/button";
import BellIcon from "../../../../public/icons/Bell.svg";
import GearIcon from "../../../../public/icons/Gear.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";

const HeaderActions = ({ isInSidebar }: { isInSidebar?: boolean }) => {
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
      <Link
        href="/profile"
        className={cn(
          buttonVariants({ variant: "default", size: "default" }),
          isInSidebar && "flex-auto",
        )}
      >
        Connect/Sign In
      </Link>
    </div>
  );
};

export default HeaderActions;
