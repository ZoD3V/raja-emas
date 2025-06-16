import { auth } from "@/auth";
import SelectorNav from "./SelectorNav";
import MainNav from "./MainNav";
import StoreInformation from "./Store-information";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreInformation />

        <MainNav className="mx-6" />

        <SelectorNav userData={session} />
      </div>
    </div>
  );
};

export default Navbar;
