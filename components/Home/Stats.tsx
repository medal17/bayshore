import Image from "next/image";
import React from "react";

export default function Stats() {
  return (
    <div className={classNames.stats}>
      <div className={classNames.row}>
        {items.map((item)=>
        <div key={item?.name} className=" h-fit my-auto">
            <Image
          src={item.name}
        //   objectFit="contain"
          width={item.w}
          height={item.h}
          alt={item.name}
          className="my-auto"
        />
        </div>)}
      </div>
    </div>
  );
}

const items =[
    {name:'/images/7mw.png',h:70, w:70},
    {name:'/images/6\ states.png',h:90,w:90},
    {name:'/images/20projects.png',h:220,w:139},
    {name:'/images/field engineers.png',h:90, w:110}
]

const classNames = {
  stats: `h-[200px] w-full bg-black lg:px-0 px-5  overflow-x-scroll`,
  row:"my-auto h-full lg:w-fit w-[600px]  overflow-x-scroll flex align-middle mx-auto lg:gap-x-20 gap-x-10"
};
