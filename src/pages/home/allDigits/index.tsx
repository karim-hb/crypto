import { Box, Typography } from "@mui/material";
import React from "react";
// Import Swiper React components
import {
  Swiper,
  SwiperSlide,
  SwiperProps as SwiperCoreProps,
} from "swiper/react";
import { Autoplay ,FreeMode} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
interface CustomSwiperProps extends SwiperCoreProps {
  slidesPerView: number | "auto";
  spaceBetween: number;
  loop: boolean;
  freeMode: boolean;
  autoplay: {
    delay: number;
    disableOnInteraction: boolean;
  };
  modules: any;
}

const SwiperCore: React.FC<CustomSwiperProps> = ({ children, ...rest }) => {
  return <Swiper {...rest}>{children}</Swiper>;
};

const AllDigits = () => {
  return (
    <Box sx={{ my: 2 }}>
      <SwiperCore
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="mySwiper"
        freeMode={true}
        modules={[Autoplay , FreeMode]}
      >
        {Array.from(Array(100).keys()).map((bg, i) => (
          <>
            <SwiperSlide>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <img src="/images/bnb.svg" alt="" />
                <Typography variant="caption">DOGE: 0.43</Typography>
              </Box>
            </SwiperSlide>
          </>
        ))}
      </SwiperCore>
    </Box>
  );
};

export default AllDigits;
