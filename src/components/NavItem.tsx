import React from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { User } from "@prisma/client";

interface NavItemProps {
  mobile?: boolean;
  currentUser?: User | null;
}
const NavItem = ({ mobile, currentUser }: NavItemProps) => {
  return (
    <ul
      className={
        'text-md justify-center w-full flex gap-4 ${mobile && "flex-col bg-orange-500 h-full"} items-center'
      }
    >
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/admin"}>Admin</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href={"/user"}>User</Link>
      </li>
      {currentUser ? (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signOut()}>SingOut</button>
        </li>
      ) : (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signIn()}>Signin</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
