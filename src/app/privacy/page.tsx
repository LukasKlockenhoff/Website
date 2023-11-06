import TextStyles from "@/utils/textstyles";
import Textstyles from "@/utils/textstyles";
import { twMerge } from "tailwind-merge";

export default async function PrivacyPolicy() {
  return (
    <div
      className={
        "w-full h-full flex justify-center dark:bg-background bg-white"
      }
    >
      <div className="flex dark:bg-background bg-white p-4 md:p-8 w-3/5 mx-auto">
        <div className="max-w-screen-lg mx-auto">
          <h2 className={twMerge(Textstyles.H2, "text-center")}>Imprint</h2>
          <div className="pt-8">
            <p className={TextStyles.BigText}>
              <strong>Responsible for the content:</strong>
            </p>
            <p className={twMerge(Textstyles.BigText, "mt-3")}>
              Lukas Klockenhoff
            </p>
            <p className={twMerge(Textstyles.BigText, "mt-1")}>
              Bredower Straße 16
            </p>
            <p className={twMerge(Textstyles.BigText, "mt-1")}>
              14612 Falkensee
            </p>
            <p className={twMerge(Textstyles.BigText, "mt-1")}>Germany</p>
            <p className={twMerge(Textstyles.BigText, "pt-8")}>
              <strong>Contact:</strong>
            </p>
            <p className={twMerge(Textstyles.BigText, "mt-3")}>
              Email: lukasklockenhoff@icloud.com
            </p>
            <p className={twMerge(Textstyles.BigText, "mt-1")}>
              Phone: +49 162 3487112
            </p>
          </div>
          <div className="mt-6">
            <p className={twMerge(Textstyles.Text, "mt-1")}>
              Any use of the above contact information for commercial purposes
              is expressly not allowed, unless I have provided my prior written
              consent or there is already a business relationship. I hereby
              object to any commercial use or distribution of my data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
