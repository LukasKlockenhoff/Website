"use client";
import Textstyles from "@/utils/textstyles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import MenuIcon from "@mui/icons-material/Menu";
import { MobileHeader } from "@/components/header/mobile-header";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Icon from "@/components/ui/icon";
import { twMerge } from "tailwind-merge";
import textstyles from "@/utils/textstyles";
//
// function MobileHeader() {
//   return (
//     <div className="flex top-16 text-right border-1 border-border">
//       <Menu as="div" className="relative inline-block text-left">
//         <div>
//           <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
//             <MenuIcon className={"dark:text-white text-black"} />
//           </Menu.Button>
//         </div>
//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-background shadow-lg ring-1 ring-black/5 focus:outline-none border-1 border-border">
//             <div className="px-1 py-1 flex flex-col items-start w-full rounded-lg">
//               <Menu.Item>
//                 <Button asChild variant={"link"}>
//                   <Link
//                     href={"/about"}
//                     className={"text-black dark:text-white"}
//                   >
//                     About
//                   </Link>
//                 </Button>
//               </Menu.Item>
//               <Menu.Item>
//                 <Button asChild variant={"link"}>
//                   <Link href={"/projects"}>Projects</Link>
//                 </Button>
//               </Menu.Item>
//               <Menu.Item>
//                 <Button asChild variant={"link"}>
//                   <Link href={"/"}>Home</Link>
//                 </Button>
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </div>
//   );
// }

export default function Header() {
  return (
    <div className={"w-full dark:bg-background bg-white mx-auto"}>
      <div className={"dark:hidden block blur"}></div>
      <div className={"hidden dark:block dark-blur"}></div>
      <div
        className={
          "flex py-10 w-[90%] sm:w-2/3 2xl:w-2/3 xl:w-[80%] items-center justify-between mx-auto"
        }
      >
        <div className={"w-1/3 hidden md:flex"}>
          <div className={"flex w-2/3 gap-x-4 lg:gap-x-0"}>
            <Button
              asChild
              variant={"ghost"}
              className={"w-1/2 hover:underline hover:underline-offset-4"}
            >
              <Link href={"/"}>
                <p className={Textstyles.BigHint}>Home</p>
              </Link>
            </Button>
            <Button
              asChild
              variant={"ghost"}
              className={"w-1/2 hover:underline hover:underline-offset-4"}
            >
              <Link href={"/about"}>
                <p className={Textstyles.BigHint}>About</p>
              </Link>
            </Button>
            <Button
              asChild
              variant={"ghost"}
              className={"w-1/2 hover:underline hover:underline-offset-4"}
            >
              <Link href={"/projects"}>
                <p className={Textstyles.BigHint}>Projects</p>
              </Link>
            </Button>
          </div>
        </div>
        <div className={"w-full justify-end md:hidden flex"}>
          <MobileHeader />
        </div>
        <div className={"flex w-1/4 md:w-1/3 justify-end"}>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
