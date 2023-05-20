import {
  Avatar,
  Box,
  ButtonBase,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import MuiDrawer from "@mui/material/Drawer";
import { useDarkModeContext } from "../context/DarkMode";
import StartIcon from "@mui/icons-material/Start";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import players from "../data/players.json";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    zIndex: theme.zIndex.appBar - 1,
    whiteSpace: "nowrap",
    width: 240,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
      }),
      width: theme.spacing(4.2),
    }),
  },
}));

const BackIcon = styled(StartIcon)({
  transform: "rotate(0.5turn);",
});
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "black",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#545454" : "#c4c4c2",
  },
}));
const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    padding: "4px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
}));

const WhiteTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.common.black
        : theme.palette.common.white,
    color: theme.palette.common.black,
    boxShadow: theme.shadows[2],
  },
}));

const SideBar = () => {
  const { kFormatter, drawerOpen, expandDrawer } = useDarkModeContext();
  return (
    <Drawer variant="permanent" open={drawerOpen}>
      <Box
        position="fixed"
        sx={{
          left: 5,
          mt: 1,
          width: 225,
          display: "flex",
          flexDirection: "column",
          ...(!drawerOpen && {
            overflowX: "hidden",
            width: (theme) => theme.spacing(3),
          }),
        }}
      >
        {drawerOpen ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={0.5}
            justifyContent={"space-between"}
          >
            <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
              RECOMMENDED CHANNELS
            </Typography>
            <StyledTooltip title="Collapse" placement="right">
              <StyledIconButton onClick={expandDrawer}>
                <BackIcon fontSize="small" />
              </StyledIconButton>
            </StyledTooltip>
          </Stack>
        ) : (
          <Stack direction={"column"}>
            <StyledTooltip title="Expand" placement="right">
              <StyledIconButton onClick={expandDrawer}>
                <StartIcon fontSize="small" />
              </StyledIconButton>
            </StyledTooltip>
            <div />
            <StyledTooltip title="Recommended Channels" placement="right">
              <VideocamOutlinedIcon fontSize="small" />
            </StyledTooltip>
          </Stack>
        )}
        {players.map((player, index) => (
          <WhiteTooltip
            key={index}
            title={
              drawerOpen ? (
                player.desc
              ) : (
                <Stack>
                  <Typography color="secondary" fontSize={11}>
                    {player.name} · {player.game}
                  </Typography>
                  <Typography
                    fontSize={11}
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === "dark" ? "white" : "black",
                    }}
                  >
                    {player.desc}
                  </Typography>
                  <Stack direction={"row"} alignItems={"center"} gap={0.5}>
                    <CircleIcon sx={{ height: 7, width: 7 }} color="error" />
                    <Typography
                      fontSize={11}
                      sx={{
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      Live | {kFormatter(player.count)} viewers
                    </Typography>
                  </Stack>
                </Stack>
              )
            }
            placement="right"
          >
            <ButtonBase
              sx={{
                justifyContent: "space-between",
                margin: drawerOpen ? "2px 0" : "0",
              }}
            >
              <Stack direction={"row"}>
                <Avatar
                  alt={player.name.charAt(0)}
                  sx={{ height: 30, width: 30, alignSelf: "center" }}
                  src={player.avatar}
                />

                <Stack alignItems={"flex-start"} pl={1.5}>
                  <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                    {player.name}
                  </Typography>
                  <Typography sx={{ fontSize: 13 }}>{player.game}</Typography>
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                alignItems={"center"}
                gap={0.4}
              >
                <CircleIcon sx={{ height: 10, width: 10 }} color="error" />
                <Typography fontSize={12}>
                  {kFormatter(player.count)}
                </Typography>
              </Stack>
            </ButtonBase>
          </WhiteTooltip>
        ))}
      </Box>
    </Drawer>
  );
};

export default SideBar;
