import { Button, Divider, Link, Stack, Typography } from "@mui/material";
import VideoData from "../data/VideoData.json";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Video from "./Video";

function LiveChannels() {
  const [showMore, setShowMore] = useState(false);
  return (
    <Stack gap={1}>
      <Stack direction={"row"} gap={0.5}>
        <Link
          underline="hover"
          color={"secondary"}
          sx={{
            fontWeight: "bold",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Live channels
        </Link>
        <Typography fontWeight={"bold"}>we think you'll like</Typography>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        sx={{
          height: showMore ? "480px" : "240px",
          justifyContent: "space-between",
        }}
        overflow={"hidden"}
        pt={1}
      >
        {VideoData.concat(VideoData)
          .concat(VideoData)
          .map((item, ind) => (
            <Video {...item} key={ind} />
          ))}
      </Stack>
      <Divider
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {!showMore && (
          <Button
            color="secondary"
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              transition: "background 0s,color 0s",
              "&:hover": {
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#363636" : "rgba(0,0,0,.12)",
                color: (theme) =>
                  theme.palette.mode === "dark" ? "white" : "black",
              },
            }}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={() => {
              setShowMore(true);
            }}
          >
            Show more
          </Button>
        )}
      </Divider>
    </Stack>
  );
}

export default LiveChannels;
