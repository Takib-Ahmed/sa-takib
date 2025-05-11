import { motion, useScroll } from "motion/react";
export default function Loader() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress, // স্ক্রল প্রগ্রেস অনুযায়ী উইডথ সেট করা
      }}
      className=" fixed start-0  w-screen origin-left   hidden md:block  Loader   sm:h-[1.5px]  top-0  "
    ></motion.div>
  );
}
