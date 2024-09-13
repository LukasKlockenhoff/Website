import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import textstyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Divider from "@mui/material/Divider";

export function MobileHeader() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <Button
          type="button"
          variant={"ghost"}
          size={"icon"}
          onClick={openModal}
        >
          <MenuIcon className={"dark:text-white text-black"} />
        </Button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-1/3 items-center mt-6 p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-foreground-white dark:bg-foreground-black p-6 text-left align-middle shadow-xl transition-all mx-auto">
                  <div className="flex justify-between items-center">
                    <Dialog.Title as="h3" className={twMerge(textstyles.Text)}>
                      Navigation
                    </Dialog.Title>
                    <Button
                      size={"icon"}
                      onClick={closeModal}
                      variant={"ghost"}
                    >
                      <CloseIcon className={twMerge(textstyles.Text)} />
                    </Button>
                  </div>
                  <div className="items-start flex flex-col">
                    <Button asChild variant={"ghost"} className={""}>
                      <Link
                        href={"/about"}
                        onClick={closeModal}
                        className={textstyles.Text}
                      >
                        About
                      </Link>
                    </Button>
                    <hr
                      className={
                        "border-t-1/2 border-grey dark:border-border w-full mx-auto"
                      }
                    />
                    <Button asChild variant={"ghost"} className={""}>
                      <Link
                        href={"/projects"}
                        onClick={closeModal}
                        className={textstyles.Text}
                      >
                        Projects
                      </Link>
                    </Button>
                    <hr
                      className={
                        "border-t-1/2 border-grey dark:border-border w-full mx-auto"
                      }
                    />
                    <hr
                      className={
                        "border-t-1/2 border-grey dark:border-border w-full mx-auto"
                      }
                    />
                    <Button asChild variant={"ghost"} className={""}>
                      <Link
                        href={"/photos"}
                        onClick={closeModal}
                        className={textstyles.Text}
                      >
                        Photos
                      </Link>
                    </Button>
                    <Button asChild variant={"ghost"} className={""}>
                      <Link
                        href={"/"}
                        onClick={closeModal}
                        className={textstyles.Text}
                      >
                        Home
                      </Link>
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
