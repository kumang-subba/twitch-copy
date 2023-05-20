import data from "../data/VideoData.json";
import { Stack, Typography } from "@mui/material";
import Video from "./Video";

function getData() {
  return data.concat(data.concat(data.concat(data.concat(data.concat(data)))));
}

function ScrollVideos() {
  const items = getData();
  return (
    <Stack>
      <Typography fontWeight={"bold"}>What's hot</Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {items.map((video, index) => (
          <Video key={index} {...video} />
        ))}
      </Stack>
    </Stack>
  );
}

export default ScrollVideos;
