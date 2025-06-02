import Image from "next/image";
import React from "react";

function Featured() {
  return (
    <div className="w-full">
      <div className={classNames.projects}>
        <h2>Featured Projects</h2>
      </div>

      <div className={classNames.imgs}>
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
                // objectPosition=""
                className="w-full h-full m-auto"
                // style={{objectFit:'contain'}}
              />
            </div>
            {/* <div className={classNames.itemTitle}>
              {item.title.substring(0, item.title.lastIndexOf(" "))}
              <br />
              {item.title.substring(
                item.title.lastIndexOf(" "),
                item.title.length
              )}
            </div> */}
            <div className={classNames.btn}>
                View Project
            </div>
            {/* <p className={classNames.text}>{item.body}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

const list = [
  {
    pic: `/images/featured 1.jpg`,
    title: "POWER AS A SERVICE"
  },
  {
    pic: `/images/featured 2.jpg`,
    title: "TELECOM INFRASTRUCTURE"
  },
  {
    pic: `/images/featured 3.jpg`,
    title: "GAS LOGISTICS"
  },
];

const classNames = {
  projects: `mx-auto w-fit text-center bg-[#E0DCDA] text-[22px] font-[700] text-[#F18125] lg:w-[40%] w-full rounded-[4px] py-1`,
  itemTitle: `font-[400] text-[18px] mt-4 text-center font-[family-name:var(--font-poppins)] mb-1`,
  imgContainer: `w-full h-[200px] bg-red-200 overflow-hidden`,
  text:`text-center text-[12px] font-[family-name:var(--font-poppins)]`,
  item: `lg:w-1/4 md:w-2/4 w-full`,
btn:`bg-[#F18125] px-[18px] py-1.5 text-white font-[600] text-[13px] rounded-full cursor-pointer shadow-xl border-4 border-white mx-auto w-fit mt-4`,
imgs:`lg:flex block gap-x-10 lg:space-y-0 space-y-10 lg:w-9/12 w-11/12 mx-auto justify-between mt-5`
};

export default Featured;
