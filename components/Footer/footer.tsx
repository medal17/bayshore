import Image from "next/image";
import React from "react";
import Link from "next/link";
// import { TfiInstagram } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className={classNames.footer}>
      <div>
        <Image
          src={"/images/logo_footer_ png.png"}
          width={200}
          height={300}
          alt={"bayshore-footer-logo"}
        />
        <p className="mt-4 text-[12px]">
          {" "}
          &copy; 2025 bayshore Technologles Limited. Al rights reserved
        </p>
      </div>
      <div className="my-auto">
        <div className={classNames.link0}>
          {links?.map((item, index) => (
            <Link
              className={classNames.link}
              key={index}
              href={item?.route}
            >
              {item?.name}
            </Link>
          ))}
        </div>
        <div className={classNames.terms}>
          {linkList?.map((item, index) => (
            <Link
              className={classNames.link}
              key={index}
              href={item?.route}
            >
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-3 w-fit lg:mt-0 mt-8 lg:mx-0 mx-auto">
        <div className={classNames.circle}>
          <BsInstagram size={14} className="h-fit m-auto" />
        </div>
        <div className={classNames.circle}>
          <FaFacebookF size={14} className="h-fit m-auto" />
        </div>
        <div className={classNames.circle}>
          <ImLinkedin2 size={14} className="h-fit m-auto" />
        </div>
      </div>
    </div>
  );
}

const links = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Services", route: "/" },
  { name: "Projects", route: "/" },
  { name: "Gallery", route: "/" },
  { name: "Contacts", route: "/" },
];

const linkList = [
  { name: "Terms", route: "/" },
  { name: "Customer Service", route: "/about" },
  { name: "Locate us", route: "/" },
  { name: "Privacy Policy", route: "/" },
];

const classNames = {
  footer:
    "mt-10 bg-[#35363A] lg:px-20 px-5 py-[30px] text-white lg:flex block justify-between",
  link: ``,
  terms: `mt-2 border-t border-t-[#fff] pt-2 flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:text-start text-center justify-between px-2`,
  circle:`size-[29px] border rounded-full flex align-middle`,
  link0:"space-x-[20px] lg:text-start text-center lg:mt-0 mt-8 lg:space-y-0 space-y-4 flex lg:flex-row flex-col px-2"
};

export default Footer;
