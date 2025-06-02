// import Image from "next/image";
import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  //   background: "#364d79",
};
function HeroSection() {
  return (
    <div className={classNames.container}>
      <Carousel className={classNames.slider} arrows draggable autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div style={contentStyle} className="slide1">
          {/* <Image src={"/images/slide 1.jpg"} objectFit="cover" layout="fill" alt={""}/> */}
          <h3 style={contentStyle}></h3>
        </div>
        <div className="slide2">
          <h3 style={contentStyle}></h3>
        </div>
        <div className="slide3">
          <h3 style={contentStyle}></h3>
        </div>
        <div className="slide4">
          <h3 style={contentStyle}></h3>
        </div>
      </Carousel>
      {/* HeroSection */}
      {/* <Image
        layout="fill"
        objectFit="contain"
        src={"/images/slide 1.jpg"}
        alt={"slide-one"}
        className="w-full"
      /> */}
      {/* <div className={classNames.slider}></div> */}
      <br />
      <div className="lg:px-0 px-5">
      <h2 className={classNames.title}>
        Powering Africa’s <br />
        Infrastructure Evolution.
      </h2>
      <p className={classNames.subtitle}>
        Scalable power, telecom, and logistics solutions - built for Africa,
        ready for the world
      </p>
      <div className="lg:w-9/12 w-11/12 mx-auto text-center">
        <strong>Bayshore Technologies Ltd.</strong> is a leading infrastructure
        solutions company delivering innovative, reliable, and sustainable
        services across the African power and telecommunications landscape.
        Established in Nigeria and strategically positioned with operations in
        the United States, we are bridging the infrastructure gap through
        forward-thinking engineering, robust project execution, and
        customer-first service delivery.
      </div>
      </div>
    </div>
  );
}

const classNames = {
  container: ` w-full`,
  slider: `h-[100vh]`,
  title: `font-[700] text-[38px] text-center`,
  subtitle: `text-center font-[600] my-2`,
};

export default HeroSection;
