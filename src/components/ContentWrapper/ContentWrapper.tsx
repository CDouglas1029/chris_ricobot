import { forwardRef } from "react";
import dates from "../../data/data.json";
import Button from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion";

type ContentWrapperType = {
  index: number;
};

const ContentWrapper = forwardRef<HTMLDivElement, ContentWrapperType>(({ index }, ref) => {
  const BaseUrl = import.meta.env.BASE_URL;
  const slides = dates.slides;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index} // Ensures smooth transitions when index changes
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex relative"
      >
        <div className="absolute overlay w-full">
          <div className="relative">
            <div className="absolute overlay bg-inner-gradient z-10" />
            {/* Background Image */}
            <motion.img
              key={slides[index].background}
              src={BaseUrl + slides[index].background}
              alt={slides[index].backgroundAlt}
              className="w-full object-contain md:object-cover max-h-[90vh]"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1, transformOrigin: "center" }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Cutout Image */}
            {slides[index].cutout && (
              <motion.img
                key={slides[index].cutout}
                src={BaseUrl + slides[index].cutout}
                alt={slides[index].cutoutAlt}
                className="absolute bottom-0 right-[10vw] max-h-[110%] max-w-[50vw] object-contain"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
            )}
          </div>
        </div>
        <motion.div className="w-full z-20 pt-[30px] pl-[35px] md:pt-[70px] md:pl-[60px]">
          {/* Headline */}
          <motion.h3
            key={slides[index].headline}
            className="text-white font-black mt-0 w-[40%] md:w-[260px] mb-[100px] md:mb-[73px] leading-[1.1em] md:leading-[1.05em] tracking-[0.04em] md:tracking-[0.02em] text-[20px] md:text-[30px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {slides[index].headline.toUpperCase()}
          </motion.h3>
          {/* Overline Button */}
          <motion.div
            key={slides[index].overline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="text-[12px] font-bold bg-transparent text-white border-[2.5px] border-white rounded-full tracking-[0.045em] pt-[8px] md:pt-[10px] pb-[10px] md:pb-[11px] px-[12px] md:px-[12px] mb-[6px] md:mb-[9px]">
              <span className="text-white font-bold text-sm">
                {slides[index].overline.toUpperCase()}
              </span>
            </Button>
          </motion.div>
          {/* Title */}
          <motion.h2
            key={slides[index].title}
            className="text-white mt-0 font-black max-w-[87vw] tracking-[0.03em] md:tracking-[0.01em] text-[43px] md:text-[49px] mb-[16px] md:mb-[14px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {slides[index].title.toUpperCase()}
          </motion.h2>
          {/* Paragraph */}
          <motion.p
            key={slides[index].paragraph}
            className="text-white mt-0 text-[14px] font-semibold max-w-[83vw] leading-[1.5em] md:leading-[1.65em] tracking-[0.01em] md:tracking-[0.072em] w-[300px] md:w-[500px] mb-[25px] md:mb-[32px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {slides[index].paragraph}
          </motion.p>
          {/* CTA Button */}
          <motion.div
            key={slides[index].button}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href={slides[index].buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-white text-black font-black text-[15px] tracking-[0.045em] inline-block cursor-pointer mb-[25px] pt-[12px] md:pt-[16px] pb-[12px] md:pb-[17px] px-[18px] md:px-[14px]"
                variant="filled"
              >
                <span className="text-black font-bolder text-md uppercase">
                  {slides[index].button}
                </span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
);

export default ContentWrapper;