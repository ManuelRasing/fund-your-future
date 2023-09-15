"use client";
import Image from "next/image";

import Nav from "@components/Nav";
import Footer from "@components/footer";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  Montserrat,
  Raleway,
  Poppins,
  Kantumruy_Pro,
  K2D,
} from "next/font/google";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

defineElement(lottie.loadAnimation);
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});
const poppins_thin = Poppins({
  subsets: ["latin"],
  weight: "300",
});
const kantumruy = Kantumruy_Pro({
  weight: "700",
  subsets: ["latin"],
});
const k2d = K2D({
  weight: "500",
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: "700",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

const Home = () => {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);
  const [card4, setCard4] = useState(false);
  return (
    <>
      <Nav></Nav>
      <Image
        className="fyf-bg-img1"
        src={`/assets/images/bg1.svg`}
        width={600}
        height={650}
        alt="fund your future"
      ></Image>
      <Image
        className="fyf-bg-img2"
        src={`/assets/images/bg2.svg`}
        width={350}
        height={400}
      ></Image>
      <section className="fyf-hero-sec text-center w-full h-4/5 flex pt-20">
        <div className="fyf-slogan flex-auto flex flex-col justify-center items-start pl-36 ...">
          <h1 className={`text-[#2351fb] ${kantumruy.className}`}>
            Empowering
            <div className="text-[#FDC500] inline"> Dreams</div>,<br />
            Funding
            <div className="text-[#e87700] inline"> Future</div>.
          </h1>
          <p className={`${k2d.className}`}>
            Welcome to FundYourFuture, your gateway <br /> to educational
            opportunities and financial <br />
            assistance!
          </p>
          <Button
            className={`fyf-btn-reg self-center ${poppins.className} hover:ease-linear duration-200 `}
            disableRipple
          >
            Register now!
          </Button>
        </div>
        <div className="fyf-slogan flex-auto flex justify-center items-center pt-16 w-1/2">
          <Image
            className="fyf-bg-ellipse2 absolute"
            src={`/assets/images/ellipse2.svg`}
            width={60}
            height={60}
            alt="fund your future"
          ></Image>
          <Image
            className="fyf-bg-ellipse1 absolute"
            src={`/assets/images/ellipse1.svg`}
            width={130}
            height={130}
          ></Image>

          <div className="fyf-slogan-container w-[400px] h-[400px] rounded-full grid">
            <Image
              className="fyf-slogan-img"
              src="/assets/images/fyf-slogan.jpg"
              width={400}
              height={400}
              alt="Be A Scholar!"
            />
            <Image
              className="fyf-slogan-img"
              src="/assets/images/fyf-slogan-1.jpg"
              width={400}
              height={400}
              alt="Be A Scholar!"
            />
            <Image
              className="fyf-slogan-img"
              src="/assets/images/fyf-slogan-2.jpg"
              width={400}
              height={400}
              alt="Be A Scholar!"
            />
            <Image
              className="fyf-slogan-img"
              src="/assets/images/fyf-slogan-3.jpg"
              width={400}
              height={400}
              alt="Be A Scholar!"
            />
          </div>
        </div>
      </section>
      <header className="w-full h-fit mt-40 text-center" id="aboutUs">
        <h2 className={`${kantumruy.className} text-4xl`}>
          Unveiling
          <div className={`text-[#FDC500] inline ${raleway.className}`}>
            {" "}
            Fund
          </div>
          <div className={`text-[#e87700] inline  ${raleway.className}`}>
            Your
          </div>
          <div className={`text-[#2351fb] inline  ${raleway.className}`}>
            Future
          </div>
        </h2>
      </header>
      <section className="fyf-about w-full h-fit  p-10 flex">
        <div className="fyf-about-viewport w-1/2 flex-col h-fit">
          <motion.div
            whileHover={card1 ? {} : { scale: 1.05, rotate: -3 }}
            onClick={() => {
              setCard1(!card1),
                setCard2(false),
                setCard3(false),
                setCard4(false);
            }}
            animate={card1 ? { scale: 1.5, x: 300, y: 100 } : {}}
            className={`fyf-about-cards bg-[#FDC500] w-[650px] h-[350px] m-auto rounded-lg p-5 overflow-hidden`}
          >
            <div className="fyf-about-card-wrapper flex">
              <lord-icon
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger={`${card1 ? "morph" : "loop"}`}
                colors="primary:#e87700,secondary:#2351fb"
                stroke="60"
                style={{ width: "250px", height: "250px", zIndex: "0" }}
              ></lord-icon>
              <motion.div
                transition={{ duration: 0.3 }}
                animate={card1 ? { x: 500 } : {}}
                className="fyf-about-card-skeleton w-full flex flex-col justify-end"
              >
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] my-5" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3]" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] my-5" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3]" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] w-[350px] my-5" />
                <br />
              </motion.div>
              {card1 && (
                <motion.div
                  transition={{ duration: 0.2 }}
                  animate={{ x: -420, y: 50 }}
                >
                  <p
                    className={`${k2d.className} text-md w-[400px] absolute text-[#f9f5eb] drop-shadow-md text-justify`}
                  >
                    At FundYourFuture, we believe that education should be
                    accessible to everyone, regardless of their financial
                    circumstances. We are dedicated to connecting students like
                    you with a wide range of scholarships, grants, and other
                    financial aid options to help you achieve your academic
                    dreams.
                  </p>
                </motion.div>
              )}
            </div>
            <h2
              className={`fyf-about-title text-[#f9f5eb] text-4xl text-center ${poppins.className}`}
            >
              <span className="text-[#e87700]">Discover</span> Your Path to{" "}
              <span className="text-[#2351fb]">Success</span>
            </h2>
          </motion.div>
          <motion.div
            whileHover={card2 ? {} : { scale: 1.05, rotate: -3 }}
            onClick={() => {
              setCard2(!card2),
                setCard1(false),
                setCard3(false),
                setCard4(false);
            }}
            animate={card2 ? { scale: 1.5, x: 300, y: -100 } : {}}
            className="fyf-about-cards bg-[#FDC500] w-[650px] h-[250px] m-auto mt-4 rounded-lg p-5 overflow-hidden"
          >
            <div className="fyf-about-card-wrapper flex">
              <lord-icon
                src="https://cdn.lordicon.com/nocovwne.json"
                trigger={card2 ? "morph" : "loop"}
                colors="primary:#e87700,secondary:#2351fb"
                stroke="60"
                style={{ width: "160px", height: "160px", zIndex: "0" }}
              ></lord-icon>
              <motion.div
                transition={{ duration: 0.3 }}
                animate={card2 ? { x: 520 } : {}}
                className="fyf-about-card-skeleton w-full flex flex-col justify-end"
              >
                <hr className="border-8 rounded-lg border-[#f9f5ebb3]  my-5" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3]" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] my-5" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] w-[350px]" />
                <br />
              </motion.div>
              {card2 && (
                <motion.div
                  transition={{ duration: 0.2 }}
                  animate={{ x: -480 }}
                >
                  <p
                    className={`${k2d.className} text-md w-[450px] absolute text-[#f9f5eb] drop-shadow-md text-justify`}
                  >
                    Applying for scholarships can often be complex and
                    time-consuming. We simplify the process by providing an
                    easy-to-use online application platform. With just a few
                    clicks, you can submit your applications directly through
                    our portal and track their progress effortlessly. Say
                    goodbye to paper forms and mailing hassles!
                  </p>
                </motion.div>
              )}
            </div>
            <h2
              className={`fyf-about-title text-[#f9f5eb] text-4xl ${poppins.className}`}
            >
              <span className="text-[#e87700]">Streamlined</span>{" "}
              <span className="text-[#2351fb]">Application</span> Process
            </h2>
          </motion.div>
        </div>
        <div className="fyf-about-viewport w-1/2 flex-col h-fit">
          <motion.div
            whileHover={card3 ? {} : { scale: 1.05, rotate: 3 }}
            onClick={() => {
              setCard2(false),
                setCard1(false),
                setCard3(!card3),
                setCard4(false);
            }}
            animate={card3 ? { scale: 1.5, x: -300, y: 150 } : {}}
            className="fyf-about-cards bg-[#FDC500] w-[650px] h-[275px] m-auto mb-4 rounded-lg p-5 overflow-hidden"
          >
            <div className="fyf-about-card-wrapper flex">
              <lord-icon
                src="https://cdn.lordicon.com/zpxybbhl.json"
                trigger={card3 ? "morph" : "loop"}
                colors="primary:#e87700,secondary:#2351fb"
                stroke="60"
                style={{
                  width: "190px",
                  height: "190px",
                  zIndex: `${card1 ? "-1" : "0"}`,
                }}
              ></lord-icon>
              <motion.div
                transition={{ duration: 0.3 }}
                animate={card3 ? { x: 520 } : {}}
                className="fyf-about-card-skeleton w-full flex flex-col justify-end"
              >
                <hr className="border-8 rounded-lg border-[#f9f5ebb3]" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] my-5" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3]" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] w-[350px] my-5" />
                <br />
              </motion.div>
              {card3 && (
                <motion.div
                  transition={{ duration: 0.2 }}
                  animate={{ x: -470, y: 10 }}
                >
                  <p
                    className={`${k2d.className} text-md w-[450px] absolute text-[#f9f5eb] drop-shadow-md text-justify`}
                  >
                    Join our vibrant community of scholars, mentors, and
                    professionals. Engage in meaningful discussions, share
                    experiences, and gain valuable insights from successful
                    scholarship recipients. Our mentorship programs connect you
                    with experienced individuals who can guide you through the
                    application process and provide mentorship during your
                    educational journey.
                  </p>
                </motion.div>
              )}
            </div>
            <h2
              className={`fyf-about-title text-[#f9f5eb] text-4xl ${poppins.className} text-center`}
            >
              <span className="text-[#e87700]">Community</span> and{" "}
              <span className="text-[#2351fb]">Support</span>
            </h2>
          </motion.div>
          <motion.div
            whileHover={card4 ? {} : { scale: 1.05, rotate: 3 }}
            onClick={() => {
              setCard2(false),
                setCard1(false),
                setCard3(false),
                setCard4(!card4);
            }}
            animate={card4 ? { scale: 1.5, x: -300, y: -150 } : {}}
            className="fyf-about-cards bg-[#FDC500] w-[650px] h-[325px] m-auto rounded-lg p-5 text-center overflow-hidden"
          >
            <div className="fyf-about-card-wrapper flex">
              <lord-icon
                src="https://cdn.lordicon.com/jqeuwnmb.json"
                trigger={card4 ? "morph" : "loop"}
                colors="primary:#e87700,secondary:#2351fb"
                stroke="60"
                style={{
                  width: "250px",
                  height: "240px",
                  zIndex: `${card1 || card2 || card3 ? "-1" : "0"}`,
                }}
              ></lord-icon>
              <motion.div
                transition={{ duration: 0.3 }}
                animate={card4 ? { x: 520 } : {}}
                className="fyf-about-card-skeleton w-full flex flex-col justify-end"
              >
                <hr className="border-8 rounded-lg border-[#f9f5ebb3]" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] my-5" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3]" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] my-5" />
                <hr className="border-8 rounded-lg border-[#f9f5ebb3] w-[350px] " />
                <br />
              </motion.div>
              {card4 && (
                <motion.div
                  transition={{ duration: 0.2 }}
                  animate={{ x: -430, y: 20 }}
                >
                  <p
                    className={`${k2d.className} text-md w-[420px] absolute text-[#f9f5eb] drop-shadow-md text-justify`}
                  >
                    Stay up-to-date with the latest scholarship opportunities,
                    educational news, and policy changes through our regularly
                    updated content. Access our extensive library of resources,
                    including guides, articles, and videos, to enhance your
                    scholarship application strategies, improve your essay
                    writing skills, and excel in interviews. We're here to
                    support you every step of the way.
                  </p>
                </motion.div>
              )}
            </div>
            <h2
              className={`fyf-about-title text-[#f9f5eb] text-4xl ${poppins.className}`}
            >
              Stay <span className="text-[#e87700]">Informed</span> and{" "}
              <span className="text-[#2351fb]">Inspired</span>
            </h2>
          </motion.div>
        </div>
      </section>
      <section className="w-full h-max mt-[50px]">
        <Image
          className={`rounded-full absolute left-[250px]`}
          src={"/assets/images/fyf-others.jpg"}
          width={250}
          height={250}
          alt="Be a Scholar!"
        ></Image>
        <div
          className={`fyf-shapes w-[250px] h-[250px] bg-[#FDC500] rounded-full absolute left-[290px] -z-10 mt-8 opacity-75`}
        ></div>
        <Image
          className={`rounded-full absolute right-[100px] mt-[150px]`}
          src={"/assets/images/fyf-others1.jpg"}
          width={250}
          height={250}
          alt="Be a Scholar!"
        ></Image>
        <div
          className={`fyf-shapes w-[250px] h-[250px] bg-[#E87700] rounded-full absolute right-[80px] -z-10 mt-[178px] opacity-75`}
        ></div>
        <Image
          className={`rounded-full absolute left-[100px] mt-[400px]`}
          src={"/assets/images/fyf-others2.jpg"}
          width={250}
          height={250}
          alt="Be a Scholar!"
        ></Image>
        <div
          className={`fyf-shapes w-[250px] h-[250px] bg-[#1C3879] rounded-full absolute left-[120px] mt-[415px] -z-10 opacity-75`}
        ></div>

        <div
          className={`fyf-shapes w-[100px] h-[100px] bg-[#FDC500] rounded-full absolute right-[600px]`}
        ></div>
        <div
          className={`fyf-shapes w-[100px] h-[100px] bg-[#E87700] rounded-full absolute mt-[200px] left-[50px]`}
        ></div>
        <div
          className={`fyf-shapes w-[75px] h-[75px] bg-[#E87700] rounded-full absolute right-[580px] mt-[50px]`}
        ></div>
        <div
          className={`fyf-shapes w-[75px] h-[75px] bg-[#1C3879] rounded-full absolute left-[80px] mt-[250px]`}
        ></div>
        <div
          className={`fyf-shapes w-[75px] h-[75px] bg-[#1C3879] rounded-full absolute right-[300px] mt-[500px]`}
        ></div>
        <div className={`w-[600px] m-auto  pt-[200px] pb-[250px]`}>
          <h3
            className={`${poppins.className} text-center text-[36px] mb-[12px]`}
          >
            Get Started Today
          </h3>
          <p
            className={`${poppins_thin.className} text-justify indent-5 text-[20px] leading-9`}
          >
            Register now to create your profile and unlock a world of
            educational possibilities. Take the first step towards securing the
            financial aid you need to pursue your dreams. Let FundYourFuture be
            your trusted companion in your academic journey.
          </p>
          <Button
            className={`fyf-btn-reg ${montserrat.className} mt-[28px] hover:ease-in-out duration-200`}
          >
            Apply for scholarship now!
          </Button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Home;
