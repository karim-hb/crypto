import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Palyer = () => {
  const [playing, setPlaying] = useState(false);
  const [seekTime, setSeekTime] = useState(0);
  const playerRef: any = useRef(null);
  const [played, setPlayed] = useState(0);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSeek = (e: any) => {
    setSeekTime(parseFloat(e.target.value));
  };

  const handleSeekComplete = () => {
    playerRef.current.seekTo(seekTime, "seconds");
  };

  return (
    <div>
      {" "}
      <ReactPlayer
        ref={playerRef}
        url="/videos/h_1920_3000k.mp4"
        width="100%"
        height="auto"
        muted={false}
        playing={playing}
        onProgress={(e) => {
          setSeekTime(e.playedSeconds);
          const { played } = e;
          setPlayed(played);
        }}
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
          component={"input"}
          sx={{ width: "100%" }}
          type="range"
          min={0}
          max={playerRef.current ? playerRef.current.getDuration() : 0}
          step={0.1}
          value={seekTime}
          onChange={handleSeek}
          onMouseUp={handleSeekComplete}
          className="custom-range-input"
 
        />
        {/*     <div>Progress: {Math.round(played * 100)}%</div> */}
      </Box>
    </div>
  );
};

export default Palyer;
