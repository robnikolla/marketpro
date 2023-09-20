import { UserButton } from "@clerk/nextjs";
import { Divide } from "lucide-react";
import { MainNav } from "@/components/main-nav";
import { StoreSwitcher } from "@/components/store-switcher";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher />
        <div>
          <MainNav className="mx-6" />
        </div>
        <div className="flex items-center ml-auto space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
