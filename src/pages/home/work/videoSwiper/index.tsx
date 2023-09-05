/* eslint-disable jsx-a11y/alt-text */
import { IconButton, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Swiper,
  SwiperProps as SwiperCoreProps,
  SwiperSlide,
} from "swiper/react";
import { Navigation } from "swiper/modules";
import Palyer from "./player";

const VideoSwiper = () => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state: any) => {
    const { played } = state;
    setPlayed(played);
  };
  const isMd = useMediaQuery("(min-width:756px)");

  return (
    <Box sx={{ overflow: "hidden" }}>
      {isMd ? (
        <SwiperCore
          onSlideChange={handleSlideChange}
          className="myswiper3"
          spaceBetween={10}
          slidesPerView={2}
        >
          <SwiperSlide>
            {" "}
            <Box sx={{ width: "400px", height: "250px" }}>
              {activeSlideIndex === 0 ? (
                <>
                  <Palyer />
                </>
              ) : (
                <>
                  <img height={250} src="/images/help.svg" />
                </>
              )}
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ width: "400px", height: "250px" }}>
              {" "}
              {activeSlideIndex === 1 ? (
                <>
                  {" "}
                  <ReactPlayer
                    ref={playerRef}
                    url="https://crypto.com/__assets/static/desktop-video-f4ccf3681da98b40f76810dff139de86.mp4"
                    width="100%"
                    height="auto"
                    playing={playing}
                    onProgress={handleProgress}
                  />
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    {playing ? (
                      <IconButton onClick={handlePlayPause}>
                        {" "}
                        <img src="/images/play.svg" alt="" />{" "}
                      </IconButton>
                    ) : (
                      <IconButton onClick={handlePlayPause}>
                        <PlayArrowIcon
                          sx={{
                            color: "#605D62",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                      </IconButton>
                    )}
                    <Box
                      sx={{ width: "100%", height: "2px", background: "#000" }}
                    >
                      <Box
                        sx={{
                          width: Math.round(played * 100),
                          height: "2px",
                          background: "#31E1F7",
                        }}
                      ></Box>
                    </Box>
                    {/*     <div>Progress: {Math.round(played * 100)}%</div> */}
                  </Box>
                </>
              ) : (
                <>
                  {" "}
                  <img height={250} src="/images/help.svg" />{" "}
                </>
              )}{" "}
            </Box>
          </SwiperSlide>
        </SwiperCore>
      ) : (
        <SwiperCore
          navigation={true}
          slidesPerView={1}
          modules={[Navigation]}
          className="mySwiper4"
          freeMode={false}
        >
          <SwiperSlide>
            {" "}
            <Box>
              <> </>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ width: "400px", height: "250px" }}>
              <>
                {" "}
                <ReactPlayer
                  ref={playerRef}
                  url="https://crypto.com/__assets/static/desktop-video-f4ccf3681da98b40f76810dff139de86.mp4"
                  width="100%"
                  height="auto"
                  playing={playing}
                  onProgress={handleProgress}
                />
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  {playing ? (
                    <IconButton onClick={handlePlayPause}>
                      {" "}
                      <img src="/images/play.svg" alt="" />{" "}
                    </IconButton>
                  ) : (
                    <IconButton onClick={handlePlayPause}>
                      <PlayArrowIcon
                        sx={{
                          color: "#605D62",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </IconButton>
                  )}
                  <Box
                    sx={{ width: "100%", height: "2px", background: "#000" }}
                  >
                    <Box
                      sx={{
                        width: Math.round(played * 100),
                        height: "2px",
                        background: "#31E1F7",
                      }}
                    ></Box>
                  </Box>
                  {/*     <div>Progress: {Math.round(played * 100)}%</div> */}
                </Box>
              </>
            </Box>
          </SwiperSlide>
        </SwiperCore>
      )}
    </Box>
  );
};

export default VideoSwiper;
interface CustomSwiperProps extends SwiperCoreProps {
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  onSlideChange?: any;
  modules?: any;
  navigation?: any;
  freeMode?: boolean;
}

const SwiperCore: React.FC<CustomSwiperProps> = ({ children, ...rest }) => {
  return <Swiper {...rest}>{children}</Swiper>;
};
