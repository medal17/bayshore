import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <div className="bg-[#E0DCDA] py-6 w-full">
      <p className="text-center text-[22px] font-[700] text-[#F18125]">
        Trusted By:
      </p>
      <br/>
      <div className="lg:px-0 px-4">
        <div className="flex gap-x-5 w-fit mx-auto lg:overflow-x-hidden overflow-x-scroll">
          {list.map((item, idx) => (
            <Image key={idx} src={item} height={100} width={100} alt={""} />
          ))}
        </div>
      </div>
    </div>
  );
}

const list = [
  "/images/mtn.jpg",
  "/images/huawei.jpg",
  "/images/greenco.jpg",
  "/images/mtn.jpg",
  "/images/huawei.jpg",
  "/images/greenco.jpg",
  "/images/mtn.jpg",
  "/images/huawei.jpg",
  "/images/greenco.jpg",
];

export default Partners;
