import Image from "next/image";
import React from "react";

function WhatWeDo() {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto">
      <h2 className={classNames.title}>What we do</h2>
      <div className={classNames.itemContainer}>
        {list.map((item) => (
          <div className={classNames.item} key={item.title}>
            <div className={classNames.imgContainer}>
              <Image
                // layout="fill"
                width={200}
                height={200}
                // objectFit="contain"
                src={item.pic}
                alt={item.title}
                className="w-fit h-fit mx-auto"
                // style={{objectFit:'contain'}}
              />
            </div>
            <div className={classNames.itemTitle}>
              {item.title.substring(0, item.title.lastIndexOf(" "))}
              <br />
              {item.title.substring(
                item.title.lastIndexOf(" "),
                item.title.length
              )}
            </div>
            <p className={classNames.text}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const list = [
  {
    pic: `/images/featured 1.jpg`,
    title: "POWER AS A SERVICE",
    body: `we desian, finance. and operate captive and embedded power plants using CNG and diesel for telecom and industrial clients under long-term agreements`,
  },
  {
    pic: `/images/featured 2.jpg`,
    title: "TELECOM INFRASTRUCTURE",
    body: `Our telecom endineerina division delivers end-to-end massive and active infrastructure for mobile networks and data operators.`,
  },
  {
    pic: `/images/featured 3.jpg`,
    title: "GAS \nLOGISTICS",
    body: `Bayshore owns CNG trucks and skids ce liverina das to its own plants anci clients. We optimize fuel delivery`,
  },
  {
    pic: `/images/featured 3.jpg`,
    title: `TECHNICAL \n CONSULTING`,
    body: `we desian, finance. and operate captive and embedded power plants using CNG and diesel for telecom and industrial clients under long-term agreements`,
  },
];

const classNames = {
  container: `font-[family-name:var(--font-geist-sans)] lg:px-0 px-4`,
  banner: `w-[100%] lg:h-[97vh] h-[60vh] bg-[#ff0] about-banner`,
  bannerImg: `w-full`,
  item: `lg:w-1/4 md:w-2/4 w-full`,
  itemContainer: `lg:flex block gap-x-[20px] lg:space-y-0 space-y-10`,
  title: `text-[#F18222] text-[32px] font-[700] mb-3 text-center mb-4`,
  itemTitle: `font-[400] text-[20px] mt-4 text-center font-[family-name:var(--font-poppins)] mb-1`,
  imgContainer: `w-full h-[200px] bg-gray-100 overflow-hidden`,
  text:`text-center text-[14px] font-[family-name:var(--font-poppins)]`
};

export default WhatWeDo;
