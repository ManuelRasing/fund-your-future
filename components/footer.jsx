"use client";
import "@styles/globals.css";
import Image from "next/image";
import { Raleway, Montserrat, Poppins } from "@next/font/google";
const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});
const poppins_thin = Poppins({
  subsets: ["latin"],
  weight: "300",
});
function footer() {
  return (
    <footer
      className={`w-full h-fit bg-[#676565] px-[50px] py-[20px] text-[#F9F5EB]`}
    >
      <h1 className={`${raleway.className} text-[28px]`}>FUNDYOURFUTURE</h1>
      <div className={`w-full flex`}>
        <div className={`flex-1 flex justify-start items-center pr-[100px]`}>
          <a
            className={`${montserrat.className} underline mr-auto text-[18px]`}
            href="#"
          >
            About Us
          </a>
          <a
            className={`${montserrat.className} underline mr-auto text-[18px]`}
            href="#"
          >
            Contact Us
          </a>
          <a
            className={`${montserrat.className} underline mr-auto text-[18px]`}
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className={`${montserrat.className} underline mr-auto text-[18px]`}
            href="#"
          >
            Terms of Service
          </a>
        </div>
        <div className={`flex-0.5 h-fit`}>
          <p className={`${montserrat.className} `}>Follow us:</p>
          <div className="fyf-platforms flex justify-evenly w-[300px]">
            <Image
              className={`cursor-pointer`}
              src={`/assets/icons/fyf-fb.svg`}
              width={75}
              height={75}
            ></Image>
            <Image
              className={`cursor-pointer`}
              src={`/assets/icons/fyf-insta.svg`}
              width={75}
              height={75}
            ></Image>
            <Image
              className={`cursor-pointer`}
              src={`/assets/icons/fyf-yt.svg`}
              width={75}
              height={75}
            ></Image>
          </div>
        </div>
      </div>
      <div className="fyf-copyright">
        <p className={`${poppins_thin.className}`}>
          Copyright © 2023 Fund Your Future, Inc.
        </p>
      </div>
    </footer>
  );
}

export default footer;
