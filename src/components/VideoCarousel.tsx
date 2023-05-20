import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Paper,
  PaperProps,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useDarkModeContext } from "../context/DarkMode";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VideoData from "../data/VideoData.json";

interface StyledPaperProps extends PaperProps {
  pos: string;
}
const StyledIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: "rgba(0,0,0,.12)",
  },
});

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop != "pos",
})<StyledPaperProps>(({ pos }) => ({
  height: "100%",
  position: "absolute",
  right: 0,
  left: 0,
  marginRight: "auto",
  marginLeft: "auto",
  width: "55%",
  transition: "500ms",
  cursor: "pointer",
  filter: "brightness(0.4)",
  "&:hover": {
    filter: "brightness(0.8)",
  },
  ...(pos === "Main" && {
    transform: "scale(1)",
    zIndex: 99,
    width: "550px",
    cursor: "default",
    filter: "brightness(1)",
    "&:hover": {
      filter: "brightness(1)",
    },
  }),
  ...(pos === "LeftLeft" && {
    transform: "translate(-55%) scale(0.6)",
    zIndex: 1,
  }),
  ...(pos === "Left" && {
    transform: "translate(-25%) scale(0.8)",
    zIndex: 2,
  }),
  ...(pos === "Right" && {
    transform: "translate(25%) scale(0.8)",
    zIndex: 2,
  }),
  ...(pos === "RightRight" && {
    transform: "translate(55%) scale(0.6)",
    zIndex: 1,
  }),
}));

const modValue = (n: number, m: number) => {
  const result = n % m;
  return result >= 0 ? result : result + m;
};
function VideoCarousel() {
  const { kFormatter } = useDarkModeContext();
  const [currentVideo, setCurrentVideo] = useState(2);
  const changePos = (position: string) => {
    switch (position) {
      case "LeftLeft":
        setCurrentVideo((prev) => modValue(prev - 2, VideoData.length));
        break;
      case "Left":
        setCurrentVideo((prev) => modValue(prev - 1, VideoData.length));
        break;
      case "Right":
        setCurrentVideo((prev) => (prev + 1) % VideoData.length);
        break;
      case "RightRight":
        setCurrentVideo((prev) => (prev + 2) % VideoData.length);
        break;
    }
  };
  return (
    <Box
      sx={{
        height: "350px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <StyledIconButton
        onClick={() => setCurrentVideo((prev) => (prev - 1) % VideoData.length)}
      >
        <ArrowBackIosNewIcon />
      </StyledIconButton>
      <Box
        sx={{
          bgcolor: "white",
          height: "90%",
          width: "85%",
          position: "relative",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.grey[50],
        }}
      >
        {VideoData.map((item, index) => {
          const indexLeftLeft = modValue(currentVideo - 2, VideoData.length);
          const indexLeft = modValue(currentVideo - 1, VideoData.length);
          const indexRight = modValue(currentVideo + 1, VideoData.length);
          const indexRightRight = modValue(currentVideo + 2, VideoData.length);
          let position = "";
          switch (index) {
            case indexLeftLeft:
              position = "LeftLeft";
              break;
            case indexLeft:
              position = "Left";
              break;
            case indexRight:
              position = "Right";
              break;
            case indexRightRight:
              position = "RightRight";
              break;
            case currentVideo:
              position = "Main";
          }
          return (
            <StyledPaper
              pos={position}
              onClick={() => {
                if (position !== "Main") {
                  changePos(position);
                }
              }}
              key={index}
            >
              {position === "Main" ? (
                <Stack
                  direction={"row"}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Stack width={"100%"} sx={{ position: "relative" }}>
                    <iframe
                      src={`http://www.youtube.com/embed/${item.src}?rel=0&amp;fs=0&amp;showinfo=0`}
                      style={{
                        height: "317px",
                        width: "100%",
                        borderWidth: 0,
                      }}
                    ></iframe>
                    <Paper
                      sx={{
                        position: "absolute",
                        backgroundColor: "red",
                        top: 10,
                        left: 10,
                        p: "1px 5px",
                        color: "white",
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      LIVE
                    </Paper>
                  </Stack>
                  <Stack m={2} sx={{ width: "40%" }}>
                    <Stack direction={"row"} gap={1} mb={1.5}>
                      <Avatar
                        src={item.avatar}
                        sx={{ height: 50, width: 50 }}
                      />
                      <Stack>
                        <Typography
                          color={"secondary"}
                          fontSize={12}
                          fontWeight={"bold"}
                        >
                          {item.name}
                        </Typography>
                        <Typography color={"secondary"} fontSize={12}>
                          {item.game}
                        </Typography>
                        <Typography fontSize={12}>
                          {kFormatter(item.viewers)} viewers
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction={"row"} mb={1} gap={1} flexWrap={"wrap"}>
                      <Chip
                        label={item.game}
                        sx={{
                          height: 20,
                          fontSize: 11,
                          fontWeight: "bold",
                        }}
                      />
                      <Chip
                        label="Gaming"
                        sx={{
                          height: 20,
                          fontSize: 11,
                          fontWeight: "bold",
                        }}
                      />
                    </Stack>
                    <Typography variant="body2">{item.desc}</Typography>
                  </Stack>
                </Stack>
              ) : (
                <img
                  src={`http://img.youtube.com/vi/${item.src}/0.jpg`}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              )}
            </StyledPaper>
          );
        })}
      </Box>
      <StyledIconButton
        onClick={() => setCurrentVideo((prev) => (prev + 1) % VideoData.length)}
      >
        <ArrowForwardIosIcon />
      </StyledIconButton>
    </Box>
  );
}

export default VideoCarousel;
