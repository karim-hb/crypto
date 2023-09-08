import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
// Import Swiper React components
import {
  Swiper,
  SwiperSlide,
  SwiperProps as SwiperCoreProps,
} from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

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
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        left: 0,
        py: 1,
        bgcolor: "background.default",
        zIndex: 1000,
      }}
    >
      <SwiperCore
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="mySwiper freeSwiper"
        freeMode={true}
        modules={[Autoplay, FreeMode]}
      >
        {Array.from(Array(100).keys()).map((bg, i) => (
          <Fragment key={i + "digits"}>
            <SwiperSlide key={i + "digits"}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <img src="/images/bnb.svg" alt="" />
                <Typography variant="caption">DOGE: 0.43</Typography>
              </Box>
            </SwiperSlide>
          </Fragment>
        ))}
      </SwiperCore>
    </Box>
  );
};

export default AllDigits;
