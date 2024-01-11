"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "@/components/NavItem";
import {USer} from "@prisma/client";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar = ({currentUser}: NavbarProps) => {
  const [menu, setMenu] = useState(false);

  console.log('currentUser', currentUser);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="relateve z-10 w-full text-white bg-orange-500">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        <div className="flex items-center text-2xl h-14">
          <Link href="/">Logo</Link>
        </div>

        <div className="text-2xl sm:hidden">
          {menu === false ? (
            <button onClick={handleMenu}>+</button>
          ) : (
            <button onClick={handleMenu}></button>
          )}
        </div>

        <div className="hidden sm:block">
          <NavItem currentUser={currentUser} />
        </div>
      </div>

      <div className="block sm:hidden">
        {menu === false ? null : <NavItem currentUser={currentUser} mobile />}
      </div>
    </nav>
  );
};

export default Navbar;
