import WhatWeDo from "@/components/WhatWeDo";
// import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiHandHeartBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";

export default function About() {
  // const route = nav
  return (
    <div className={classNames.container}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className={classNames.banner}></div>
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:flex block gap-x-5">
            <div className={classNames.left}>
              <h2 className={classNames.title}>Who we are</h2>
              <p>
                Bayshore Technologies Ltd. is a leading infrastructure solutions
                company delivering innovative, reliable, and sustainable
                services across the African power and telecommunications
                landscape.
                <br />
                <br />
                Established in Nigeria and strategically positioned with
                operations in the United States, we are bridging the
                infrastructure gap through forward-thinking engineering, robust
                project execution, and customer-first service delivery.
                <br />
                <br />
                <p className={classNames.subtitle}>What we do</p>
                {/* <br/> */}
                <ul>
                  <li>With five synergistic business verticals</li> -
                  <br />
                  <li>Power as a Service</li>
                  <br />
                  <li>Integrated Power Solutions</li>
                  <br />
                  <li>Telecommunication Infrastructure</li>
                  <br />
                  <li>Natural Gas Logistics </li>
                  <br />
                  Advisory & Consulting Bayshore is redefining
                </ul>
                <br />
                <br />
                how critical infrastructure is designed, deployed, and
                maintained. Our solutions are built to perform under pressure,
                scale with demand and contribute meaningfully to national
                development goals.
                <br />
                <br />
                {`We pride ourselves on being both local and global - deeply
                rooted in Africa's realities but guided by world-class
                standards, partnerships, and governance.`}
              </p>
            </div>
            {/* <div className="h-full w-1 bg-red-900"></div> */}
            <div className="lg:w-5/12 w-full lg:pt-[52px] pt-2">
              <div className="flex">
                <div className="h-[60px] w-[120px] mr-4 bg-[#F18222]">
                  <div className="flex align-middle m-auto w-full h-full">
                    <HiOutlineLightBulb
                      className="m-auto"
                      color="white"
                      size={35}
                    />
                  </div>
                </div>
                <div>
                <p className={classNames.subtitle}>Vision</p>
              {/* <br/> */}
              <p className="text-[22px]">
              {`To be Africa's leading private infrastructure platform powering
              inclusive development.`}
              </p>
              </div>
              </div>

              <br />
              <br />
              <br />
              <div className="flex">
                <div className="h-[60px] w-[140px] bg-[#F18222] mr-4">
                  <div className="flex align-middle m-auto w-full h-full">
                    <TbTargetArrow className="m-auto" color="white" size={35} />
                  </div>
                </div>
                <div className="text-[22px]">
                <p className={classNames.subtitle}>Mission</p>
              {/* <br/> */}
              Deliver reliable, sustainable, and efficient infrastructure
              services that transform communities and catalyze growth.
              </div>
              </div>

              <br />
              <br />
              <br />
              <div className="flex">
                <div className="h-[60px] mr-4 w-[80px] bg-[#F18222]">
                  <div className="flex align-middle m-auto w-full h-full">
                    <PiHandHeartBold
                      className="m-auto"
                      color="white"
                      size={35}
                    />
                  </div>
                </div>
                <div className={'text-[22px]'}>
                  <p className={classNames.subtitle}>Core Values </p>
                  {/* <br/> */}
                  Integrity, Innovation, Resilience, Collaboration, Impact
                </div>
              </div>
              <br />
              <br />
              <br />
              <p className={classNames.subtitle}>Leadership Culture</p>
              {/* <br/> */}
              Agile, Accountable, Growth-Oriented
              <br />
              <br />
              <p className={classNames.subtitle}>Brand Promise</p>
              {/* <br/> */}
              Infrastructure. Delivered. Sustainably.
            </div>
          </div>
          <br />
          <br />
          <br />

          <WhatWeDo />
        </div>
      </main>
    </div>
  );
}

// const list = [
//   {
//     title: "POWER AS A SERVICE",
//     body: `we desian, finance. and operate captive and embedded power plants using CNG and diesel for telecom and industrial clients under long-term agreements`,
//   },
//   {
//     title: "TELECOM INFRASTRUCTURE",
//     body: `Our telecom endineerina division delivers end-to-end massive and active infrastructure for mobile networks and data operators.`,
//   },
//   {
//     title: "GAS LOGISTICS",
//     body: `Bayshore owns CNG trucks and skids ce liverina das to its own plants anci clients. We optimize fuel delivery`,
//   },
//   {
//     title: `TECHNICAL \nCONSULTING`,
//     body: `we desian, finance. and operate captive and embedded power plants using CNG and diesel for telecom and industrial clients under long-term agreements`,
//   },
// ];

const classNames = {
  container: `font-[family-name:var(--font-geist-sans)]`,
  banner: `w-[100%] lg:h-[97vh] h-[60vh] bg-[#ff0] about-banner`,
  bannerImg: `w-full`,
  item: `lg:w-1/4 md:w-2/4 w-full`,
  itemContainer: `flex flex-wrap md:gap-x-12 gap-x-5`,
  title: `text-[#F18222] text-[32px] font-[700] mb-3`,
  subtitle: `text-[#F18222] text-[28px] font-[700] mb-3`,
  left: "lg:w-7/12 w-full lg:border-r border-r-0 lg:pr-[30px] pr-0 lg:border-r-gray-300 pb-10",
};
