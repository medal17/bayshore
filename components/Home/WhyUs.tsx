import React from "react";
import { FaCircleDot } from "react-icons/fa6";

function WhyUs() {
  return (
    <div className="w-full my-5">
      <div className={classNames.title}>Why Bayshore?</div>
      <div className="mx-auto w-fit text-center">
      <p className="lg:text-[34px] text-[30px] leading-[42px]">
        We are focused on providing our clients <br/>with the highest level of
        quality
      </p>
      <div className="mx-auto lg:flex block gap-x-5 mt-7 w-fit">
        <div className="flex gap-x-2 text-[20px]">
          <FaCircleDot className="my-auto" color="#F18222"/>
          Deliverable excellence
        </div>
        <div className="flex gap-x-2 text-[20px]">
          <FaCircleDot className="my-auto" color="#F18222" />
          Dual Market Experience
        </div>
        <div className="flex gap-x-2 text-[20px]">
          <FaCircleDot className="my-auto" color="#F18222"/>
          Credibility
        </div>
        </div>
      </div>
      <br/>
    </div>
  );
}

const classNames ={
    title:"my-[20px] text-[#F18222] bg-[#E0DCDA] text-[40px] w-10/12 text-center mx-auto font-[700]"
}

export default WhyUs;
