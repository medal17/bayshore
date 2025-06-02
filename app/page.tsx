import Featured from "@/components/Home/Featured";
import HeroSection from "@/components/Home/HeroSection";
import Partners from "@/components/Home/Partners";
import Stats from "@/components/Home/Stats";
import Testimonial from "@/components/Home/Testimonial";
import WhyUs from "@/components/Home/WhyUs";
import WhatWeDo from "@/components/WhatWeDo";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Home() {
  // const router = useRouter()
  return (
    <div className={classNames.container}>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection/>
        <br/>
        <Stats/>
        <WhatWeDo/>
        <WhyUs/>
        <Testimonial/>
        <Featured/>
        <br/>
        <Partners/>
      </main>
    </div>
  );
}

const classNames = {
  container: `font-[family-name:var(--font-geist-sans)]`,
};
