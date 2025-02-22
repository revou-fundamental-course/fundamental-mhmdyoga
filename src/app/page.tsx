import Image from "next/image";

import Work from "./Work/page";
import { Lobster } from "next/font/google";
import Link from "next/link";
import { MotionDiv } from "@/components/Motion/page";
// fonts
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
// animation
const Project = {
  offScreen : {
    opacity: 0,
    x: -100,
  },
  onScreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.5
    }
  },
 WhileInView : {
  opacity: 1,
  x: 0,
  transition: {
    type: "spring",
    bounce: 0.4,
    duration: 1
  },
 }
}
const fromRight = {
  offScreen : {
    opacity: 0,
    x: 100,
  },
  onScreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.5
    }
  },
 WhileInView : {
  opacity: 1,
  x: 0,
  transition: {
    type: "spring",
    bounce: 0.4,
    duration: 1
  },
 }
}


export default function Home() {
  return (
    <>
      <div>
        <Work/>
        <div className="text-start p-12">
          <h2 className={`text-5xl font-bold p-12 ${lobster.className} text-gray-500`}>My Project</h2>
          {/* 1 */}
          <MotionDiv variants={Project} initial="offScreen" whileInView="WhileInView" exit="exit" viewport={{ once: true , amount: 0.5}}  className="md:p-36 p-12 md:mt-[-123px] mt-24">
          <div className="bg-gray-500 md:p-12 p-5 justify-center rounded-3xl md:w-[470px] w-64">
            <Link href="https://thesneakers.vercel.app/">
            <Image className="rounded-3xl" src="https://blogger.googleusercontent.com/img/a/AVvXsEh01JWWWzQ6bSvHBiQsr9DBHedfyKAwVt2K9IgxLi3f9mhtBFSQjBGOPQ7A4LOGO08OeO9_k0_NLOm0bUVM-MziSe5r_9TZa8UM9WXMdzpwDA8JXrIH6CxVsKE6A3Mcwv51FRMJdZ3cvYSKMk1atppGZOLrimAu6dWvDkN7GMMn2ZjPLfiDQ53uPvMlRRc" alt="logo" width={400} height={400}/>
            </Link>
          </div>
        </MotionDiv>
        {/* 2 */}
        <MotionDiv variants={fromRight} initial="offScreen" whileInView="WhileInView" exit="exit" viewport={{ once: true , amount: 0.5}} className="md:p-36 p-12 md:mt-[-173px] mt-[-40px] md:ml-[483px] ml-0">
          <div className="bg-gray-500 md:-12 p-5 justify-center rounded-3xl md:w-[470px] w-64 ">
            <Link href="https://mhmdyoga.github.io/sppp/">
            <Image className="rounded-3xl" src="https://blogger.googleusercontent.com/img/a/AVvXsEg9oEY_GZpZzxhA46-G0bwArwHB3onfXNcWYKIEiIBR8R4TZ3Ngwi-GK533yDxwtPIP4B3yzI7OlBiYU01XSg7xcLlJdcRYbbOGj-QvhHkN-I2kMpJdQX4aysGpAp8ee72iroAbjooFaxNKhALO_J4eim74qKBpLKRphUwcBZ75WsUpzyldFoa-LfAE5ds" alt="logo" width={400} height={400}/>
            </Link>
          </div>
        </MotionDiv>
        </div>
          {/* 3 */}
          <MotionDiv variants={Project} initial="offScreen" whileInView="WhileInView" exit="exit" viewport={{ once: true , amount: 0.5}}  className="md:p-36 p-12 md:mt-[-123px] mt-[-60px] ml-12">
          <div className="bg-gray-500 md:p-12 p-5 justify-center rounded-3xl md:w-[470px] w-64">
            <Link href="https://mhmdyoga.github.io/travelbromo/">
            <Image className="rounded-3xl" src="https://blogger.googleusercontent.com/img/a/AVvXsEgSed58l7dkNK3hVBdxh3Kj6ucaD1mpN8EbfUdkUE1jFbh1ZvOg7u4XbuEiv3yKYuHCe_HP6i6OI218WOPu4MS5U1_6Itt3yYYol3hQFHxkZMp2A3cub42UpR_pC69opvtbPjUpmHb1tLnc-JqRhLDQT-1NjOASOJfHg4HLCCCh3iU1YKLGycZNv065198" alt="logo" width={400} height={400}/>
            </Link>
          </div>
        </MotionDiv>
        {/* 4 */}
        <MotionDiv variants={fromRight} initial="offScreen" whileInView="WhileInView" exit="exit" viewport={{ once: true , amount: 0.5}} className="md:p-36 p-12 md:mt-[-173px] mt-[-40px] md:ml-[483px] ml-12">
        <div className="bg-gray-500 md:-12 p-5 justify-center rounded-3xl md:w-[470px] w-64 ">
          <Link href="https://weabonim.vercel.app/">
          <Image className="rounded-3xl" src="https://blogger.googleusercontent.com/img/a/AVvXsEga0Rtmih6rC_9QXUpRE4Yy1Di9AWVDLG47Rxh9ao77JNt2Y57AxLzaPcShVFXAS5xqngTppC0VlMS5rGJgEbYiZ6Yw0CTuF6JpO3b4_p2aqXoVDgTaoZz7HbaXJCJwYx2tBHz9uSCzgFkwCtT5-bw2Kzj0jkSqgPp21W6NjN2JL7jDvITB1mFRQrrS4Ow" alt="logo" width={400} height={400}/>
          </Link>
        </div>
      </MotionDiv>
      {/* 5 */}
      <MotionDiv variants={Project} initial="offScreen" whileInView="WhileInView" exit="exit" viewport={{ once: true , amount: 0.5}}  className="md:p-36 p-12 md:mt-[-123px] mt-[-60px] ml-12">
          <div className="bg-gray-500 md:p-12 p-5 justify-center rounded-3xl md:w-[470px] w-64">
            <Link href="https://mybottlewear.vercel.app/">
            <Image className="rounded-3xl" src="/Main-page-frane.png" alt="logo" width={400} height={400}/>
            </Link>
          </div>
        </MotionDiv>
        {/* 6 */}
        <MotionDiv variants={fromRight} initial="offScreen" whileInView="WhileInView" exit="exit" viewport={{ once: true , amount: 0.5}} className="md:p-36 p-12 md:mt-[-173px] mt-[-40px] md:ml-[483px] ml-12">
        <div className="bg-gray-500 md:-12 p-5 justify-center rounded-3xl md:w-[470px] w-64 ">
          <Link href="https://sportyz.vercel.app/">
          <Image className="rounded-3xl" src="/sportysz.png" alt="logo" width={400} height={400}/>
          </Link>
        </div>
      </MotionDiv>
      </div>
    </>
  );
}
