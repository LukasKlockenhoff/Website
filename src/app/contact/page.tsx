import TextStyles from "@/utils/textstyles";
import {twMerge} from "tailwind-merge";

export default async function Contact() {
    return (
        <div className={"w-full h-full dark:bg-background bg-white"}>
            <div className={"flex flex-col gap-y-2 h-full w-full"}>
                <h1 className={twMerge(TextStyles.H3, "flex mx-auto")}>Contact</h1>
                <div className={"flex flex-col gap-y-2 mx-auto w-5/12 h-full pt-24"}>
                    <p className={TextStyles.BigText}>
                        Thank you for your interest in lukasklockenhoff.me. If you have any questions, comments, or
                        would like
                        to
                    </p>
                    <p className={TextStyles.BigText}>
                        get in touch, please use the information provided below. We will make every effort to respond to
                        your
                        inquiries as soon as possible.
                    </p>
                    <p className={TextStyles.BigText}>
                        Email:
                        lukasklockenhoff@icloud.com
                    </p>
                    <p className={TextStyles.BigText}>
                        Business Hours:
                        Monday to Friday: 9:00 AM - 5:00 PM CET
                    </p>
                    <p className={TextStyles.BigText}>
                        Please note that lukasklockenhoff.me respects your privacy and is committed to protecting it. We
                        do
                        not
                        collect personal data via our website. For more information, please visit our Privacy Policy
                        page.
                    </p>
                </div>r
            </div>
        </div>
    )
        ;
}