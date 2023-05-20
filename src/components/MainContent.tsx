import { Box } from "@mui/material";
import VideoCarousel from "./VideoCarousel";
import LiveChannels from "./LiveChannels";
import Categories from "./Categories";
import CategoryButtons from "./CategoryButtons";
import ScrollVideos from "./ScrollVideos";

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        overflow: "auto",
        height: "auto",
        pl: 4,
        pr: 3,
        pb: 5,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : theme.palette.grey[50],
      }}
    >
      <VideoCarousel />
      <LiveChannels />
      <Categories />
      <CategoryButtons />
      <ScrollVideos />
    </Box>
  );
};

export default MainContent;
