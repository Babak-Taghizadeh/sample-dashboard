import HeaderInput from "./header/header-input";
import HeaderActions from "./header/header-actions";
import HeaderMenuLogo from "./header/header-menu-logo";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <HeaderMenuLogo />
      <HeaderInput isInSidebar={false} />
      <HeaderActions isInSidebar={false} />
    </header>
  );
};

export default Header;
