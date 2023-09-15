"use client";

import "@styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Raleway, Mohave } from "@next/font/google";

const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});
const mohave = Mohave({
  weight: "700",
  subsets: ["latin"],
});

function Nav() {
  const router = useRouter();
  return (
    <nav className="fyf-nav w-full flex px-5">
      <div className="fyf flex-auto flex items-end">
        <Image
          className="inline cursor-pointer"
          src={"/assets/icons/fyf-logo.svg"}
          alt="FundYourFuture"
          height={50}
          width={50}
        ></Image>
        <h1
          className={`text-[#2351fb] inline cursor-pointer ${raleway.className}`}
        >
          <div className="text-[#FDC500] inline">Fund</div>
          <div className="text-[#e87700] inline">Your</div>Future
        </h1>
      </div>
      <div className="fyf-tabs flex-auto self-end flex justify-around pl-80">
        <Link className={`tab-links ${mohave.className}`} href={"#"}>
          Home
        </Link>
        <Link className={`tab-links ${mohave.className}`} href={"#"}>
          News
        </Link>
        <Link className={`tab-links ${mohave.className}`} href={"#"}>
          Scholar's Portal
        </Link>
        <Link
          className={`tab-links ${mohave.className}`}
          href={""}
          onClick={() => router.push("/#aboutUs")}
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
