import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <div className="bg-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl flex justify-between mx-2 sm:mx-auto items-center py-6">
      <div className="sm:ml-3">
        <img
          src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
          alt="Logo"
          className="h-5 cursor-pointer hidden sm:inline-flex"
        />
      </div>
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/about">
          <h2 className="text-2xl">
            <span className="font-bold bg-red-300 py-1 px-2 rounded-lg mr-0 sm:mr-4">
              Prestige Homes
            </span>
          </h2>
        </Link>
      </div>
      </div>
    </div>
  );
}
