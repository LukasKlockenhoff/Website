"use client";

import { experiences } from "@/db/schema/experiences";
import TextStyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import P001 from "../../../public/gallery/P001.png";
import P002 from "../../../public/gallery/P002.png";
import P003 from "../../../public/gallery/P003.png";
import P004 from "../../../public/gallery/P004.png";
import P005 from "../../../public/gallery/P005.png";
import P006 from "../../../public/gallery/P006.png";
import P007 from "../../../public/gallery/P007.png";
import P008 from "../../../public/gallery/P008.png";
import P009 from "../../../public/gallery/P009.png";
import P010 from "../../../public/gallery/P010.png";
import P011 from "../../../public/gallery/P011.png";
import P012 from "../../../public/gallery/P012.png";
import P013 from "../../../public/gallery/P013.png";
import P014 from "../../../public/gallery/P014.png";
import P015 from "../../../public/gallery/P015.png";
import P016 from "../../../public/gallery/P016.png";
import P017 from "../../../public/gallery/P017.png";
import P018 from "../../../public/gallery/P018.png";
import P019 from "../../../public/gallery/P019.png";
import P021 from "../../../public/gallery/P021.png";
import P022 from "../../../public/gallery/P022.png";
import P023 from "../../../public/gallery/P023.png";
import P024 from "../../../public/gallery/P024.png";
import P025 from "../../../public/gallery/P025.png";
import P026 from "../../../public/gallery/P026.png";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PhotoProps {
  url: StaticImport;
}

const Photo = ({ url }: PhotoProps) => {
  return (
    <div className="w-full h-full">
      <Image
        src={"/gallery/P001.png"}
        fill={true}
        alt="Picture of the author"
        placeholder="blur"
      />
    </div>
  );
};

const photos = [
  P010,
  P011,
  P012,
  P013,
  P014,
  P015,
  P016,
  P017,
  P018,
  P019,
  P021,
  P022,
  P023,
  P024,
  P025,
  P026,
];

const prioPhotos = [P001, P002, P003, P004, P005, P006, P007, P008, P009];

export default function Photos() {
  return (
    <div
      className={
        "w-full h-full justify-center dark:bg-background bg-white overflow-x-clip"
      }
    >
      <div className={"w-[90%] sm:w-2/3 2xl:w-2/3 xl:w-[80%] mx-auto as"}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {prioPhotos.map((src) => (
            <div className="w-full h-full" key={src.src}>
              <AspectRatio ratio={3 / 4} className="bg-muted">
                <Image
                  className={`h-full w-full rounded-lg object-cover`}
                  src={src}
                  alt=""
                  placeholder="blur"
                  priority={true}
                  quality={50}
                />
              </AspectRatio>
            </div>
          ))}
          {photos.map((src) => (
            <div className="w-full h-full" key={src.src}>
              <AspectRatio ratio={3 / 4} className="bg-muted">
                <Image
                  className={`h-full w-full rounded-lg object-cover`}
                  src={src}
                  alt=""
                  placeholder="blur"
                  quality={50}
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
