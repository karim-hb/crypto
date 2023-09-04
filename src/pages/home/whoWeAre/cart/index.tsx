import React from "react";
// Import Swiper React components
import {
  Swiper,
  SwiperProps as SwiperCoreProps,
  SwiperSlide,
} from "swiper/react";

// Import Swiper styles

// import required modules
import { Box, useMediaQuery } from "@mui/material";
import { Scrollbar } from "swiper/modules";
import Details from "./details";
interface CustomSwiperProps extends SwiperCoreProps {
  slidesPerView: number | "auto";
  spaceBetween: number;
  loop: boolean;
  freeMode: boolean;
  scrollbar: any;
  modules: any;
}

const SwiperCore: React.FC<CustomSwiperProps> = ({ children, ...rest }) => {
  return <Swiper {...rest}>{children}</Swiper>;
};

const Carts = () => {
  const isLg = useMediaQuery("(min-width:960px)");

  return (
    <Box sx={{ mt: 9, position: "relative" }}>
      <SwiperCore
        scrollbar={{
          hide: false,
        }}
        slidesPerView={isLg ? 4 : 1}
        loop={false}
        freeMode={false}
        spaceBetween={10}
        modules={[Scrollbar /* , FreeMode */]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Details
            image={"/images/speciemn.svg"}
            title={"Specimen Book"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Details
            image={"/images/dummy.svg"}
            title={"Specimen Book"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Details
            image={"/images/good.svg"}
            title={"Specimen Book"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Details
            image={"/images/random.svg"}
            title={"Specimen Book"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ."
            }
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Details
            image={"/images/speciemn.svg"}
            title={"Specimen Book"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Details
            image={"/images/dummy.svg"}
            title={"Specimen Book"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Details
            image={"/images/good.svg"}
            title={"Specimen Book"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Details
            image={"/images/random.svg"}
            title={"Specimen Book"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ."
            }
          />
        </SwiperSlide>
      </SwiperCore>
    </Box>
  );
};

export default Carts;
