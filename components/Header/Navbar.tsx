"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/compat/router";
import { Popover } from "antd";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { headers } from "next/headers";

function Navbar() {
  const [current] = useState("");
  const router = useRouter();

  // },[])
  useEffect(() => {
    // alert("yoh");
    console.log(router);
  }, [router]);

  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const Content = () => {
    return (
      <div className="w-10/12 flex flex-col">
        {links.map((e, i) => (
          <Link className={classNames.link} key={i} href={e?.route} onClick={hide}>
            {e.name}
          </Link>
        ))}
      </div>
    );
  };

  console.log("PATH", router?.query);
  return (
    <div className={classNames.container}>
      <Image
        width={200}
        height={200}
        src={"/images/logo_original_ png.png"}
        alt={"bayshore logo"}
        priority
      />
      {router?.pathname}
      <div className={classNames.links}>
        {links.map((item, index) => (
          <Link
            className={
              classNames[item.name.includes(current) ? "links1" : "links2"]
            }
            key={index}
            href={item?.route}
          >
            {item?.name}
          </Link>
        ))}
      </div>

      <Popover
        content={<Content />}
        // title="Title"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        arrow={false}
        className="lg:hidden flex"
      >
        <div className="my-auto">
          <HiOutlineMenuAlt2 className="my-auto" size={28} />
        </div>
      </Popover>
    </div>
  );
}

export const links = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Services", route: "/" },
  { name: "Projects", route: "/" },
  { name: "Gallery", route: "/" },
  { name: "Contacts", route: "/" },
];

const classNames = {
  container: `w-full z-999 flex py-[15] justify-between bg-white lg:px-20 px-6 font-[family-name:var(--font-geist-sans)] font-[500] fixed`,
  links: `my-auto h-fit lg:space-x-20 space-x-5 lg:flex hidden`,
  links1: `my-auto h-fit lg:space-x-20 space-x-5`,
  links2: `my-auto h-fit lg:space-x-20 space-x-5`,
  link:"w-[95vw] mx-auto text-[16px] my-[10px] text-center font-[family-name:var(--font-poppins)]"
};

export default Navbar;
