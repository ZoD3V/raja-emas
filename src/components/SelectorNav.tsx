"use client";
import React, { useState } from "react";
import { AlignRight } from "lucide-react";
import MobileNav from "./MobileNav";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const SelectorNav = ({ userData }: { userData: any }) => {
  const [nav, setNav] = useState(false);
  console.log(userData);
  return (
    <>
      <div className="ml-auto flex items-center space-x-4">
        <Avatar className="cursor-pointer">
          <AvatarFallback>{userData.user.name.slice(0,2)}</AvatarFallback>
        </Avatar>
        <AlignRight
          className="block lg:hidden cursor-pointer"
          onClick={() => setNav(!nav)}
        />
      </div>
      <MobileNav active={nav} />
    </>
  );
};

export default SelectorNav;
