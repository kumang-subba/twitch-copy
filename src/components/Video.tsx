import { Avatar, Chip, Paper, Stack, Typography } from "@mui/material";
import { useDarkModeContext } from "../context/DarkMode";

type VideoProps = {
  name: string;
  src: string;
  viewers: number;
  title: string;
  game: string;
  desc: string;
  avatar: string;
};
function Video({ name, src, viewers, title, game, desc, avatar }: VideoProps) {
  const { kFormatter } = useDarkModeContext();
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}deg, 80%, 50%)`;
  return (
    <Stack sx={{ position: "relative" }} gap={1}>
      <Stack
        sx={{
          transition: "200ms",
          "&:hover": {
            transform: "translate(5px,-5px)",
            boxShadow: `-7px 7px ${randomColor},-6px 6px ${randomColor},-5px 5px ${randomColor}, -4px 4px ${randomColor}, -3px 3px ${randomColor}, -2px 2px ${randomColor}`,
          },
        }}
      >
        <img
          src={`http://img.youtube.com/vi/${src}/0.jpg`}
          style={{
            objectFit: "cover",
            width: "265px",
            height: "145px",
            display: "inline-block",
          }}
        ></img>
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
        <Paper
          sx={{
            position: "absolute",
            background: "rgba(0,0,0,0.5)",
            top: 115,
            left: 10,
            p: "1px 5px",
            color: "white",
            fontSize: 12,
          }}
        >
          {kFormatter(viewers)} viewers
        </Paper>
      </Stack>

      <Stack direction={"row"} gap={1}>
        <Avatar src={avatar} sx={{ height: 40, width: 40 }} />
        <Stack direction={"column"}>
          <Typography
            textOverflow={"ellipsis"}
            overflow={"hidden"}
            whiteSpace={"nowrap"}
            sx={{ maxWidth: "200px" }}
            fontWeight={"bold"}
            fontSize={14}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              color: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.grey[500]
                  : theme.palette.grey[700],
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: 13,
              color: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.grey[500]
                  : theme.palette.grey[700],
            }}
          >
            {game}
          </Typography>
          <Stack direction={"row"} mb={1} gap={1} flexWrap={"wrap"}>
            <Chip
              label={game}
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
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Video;
