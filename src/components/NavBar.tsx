import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Popover,
  Stack,
  Switch,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiTwitch } from "@mdi/js";
import { mdiDotsVertical } from "@mdi/js";
import { Search } from "@mui/icons-material";
import { mdiCrown } from "@mdi/js";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { useState } from "react";
import CrownPopup from "./CrownPopup";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LoginIcon from "@mui/icons-material/Login";
import { useDarkModeContext } from "../context/DarkMode";

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.secondary.main : "black",
  fontWeight: "bolder",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const StyledIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: "rgba(0,0,0,.12)",
  },
});
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
const StyledMenuItem = styled(MenuItem)({
  fontSize: "12px",
  padding: "3px 15px",
  height: 20,
  width: 200,
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [anchorCrown, setAnchorCrown] = useState<null | HTMLElement>(null);
  const openCrown = Boolean(anchorCrown);
  const handleCrownMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorCrown(e.currentTarget);
  };
  const handleCloseCrownMenu = () => {
    setAnchorCrown(null);
  };
  const crownId = openCrown ? "crown-popover" : undefined;

  const [loginModal, setLoginModal] = useState(false);
  const closeModal = () => setLoginModal(false);
  const openModal = () => setLoginModal(true);

  const [anchorUserEl, setAnchorUserEl] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(anchorUserEl);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorUserEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorUserEl(null);
  };

  const { mode, colorMode, signUpModal, closeSignUpModal, openSignUpModal } =
    useDarkModeContext();

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    padding: 8,
    width: 55,
    height: 36,

    "& .MuiSwitch-track": {
      opacity: 1,
      borderRadius: 22 / 2,
      backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
      border: "2px solid black",
      transitionDuration: "300ms",

      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "45%",
        transform: "translateY(-50%)",
        width: 13,
        height: 13,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.secondary.main
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      backgroundColor: theme.palette.mode === "dark" ? "#9146ff" : "black",
      width: 13,
      height: 13,
      margin: 3,
    },
    "& .MuiSwitch-switchBase": {
      transform: "translateX(2px)",
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(17px)",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
          border:
            theme.palette.mode === "dark"
              ? "2px solid #9146ff"
              : "2px solid black",
          opacity: 1,
        },
      },
    },
  }));

  return (
    <AppBar
      sx={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        flexDirection: "row",
        justifyContent: "space-between",
        bgcolor: mode === "light" ? "white" : "black",
        color: "black",
      }}
    >
      <Stack direction="row" gap={3} pl="5px" alignItems="center">
        <IconButton>
          <Icon path={mdiTwitch} size={1.5} color="#9146ff" />
        </IconButton>
        <StyledLink underline="none" href="#">
          Browse
        </StyledLink>
        <StyledTooltip title="More">
          <StyledIconButton
            id="more-menu-btn"
            onClick={handleOpenMenu}
            aria-controls={openMenu ? "more-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
          >
            <Icon path={mdiDotsVertical} size={1} />
          </StyledIconButton>
        </StyledTooltip>
        <Menu
          id="more-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          transitionDuration={0.1}
          MenuListProps={{
            "aria-labelledby": "more-menu-btn",
          }}
        >
          <MenuItem disabled>General</MenuItem>
          <StyledMenuItem>About</StyledMenuItem>
          <StyledMenuItem>Advertisers</StyledMenuItem>
          <StyledMenuItem>Blog</StyledMenuItem>
          <StyledMenuItem>Developers</StyledMenuItem>
          <StyledMenuItem>Download Apps</StyledMenuItem>
          <StyledMenuItem>Gift Card</StyledMenuItem>
          <StyledMenuItem>IGDB</StyledMenuItem>
          <StyledMenuItem>Jobs</StyledMenuItem>
          <StyledMenuItem>Loot Cave - Merch Store</StyledMenuItem>
          <StyledMenuItem>Music on Twitch</StyledMenuItem>
          <StyledMenuItem>Partners</StyledMenuItem>
          <StyledMenuItem>Press</StyledMenuItem>
          <StyledMenuItem>Turbo</StyledMenuItem>
          <Divider />
          <MenuItem disabled>Help & Legal</MenuItem>
          <StyledMenuItem>Accessibility Statement</StyledMenuItem>
          <StyledMenuItem>Ad Choices</StyledMenuItem>
          <StyledMenuItem>Community Guidelines</StyledMenuItem>
          <StyledMenuItem>Cookie Policy</StyledMenuItem>
          <StyledMenuItem>Help</StyledMenuItem>
          <StyledMenuItem>Privacy Policy</StyledMenuItem>
          <StyledMenuItem>Safety Center</StyledMenuItem>
          <StyledMenuItem>Security</StyledMenuItem>
          <StyledMenuItem>Terms</StyledMenuItem>
        </Menu>
      </Stack>
      <Stack direction="row" alignItems="center" gap={0.25}>
        <TextField
          placeholder="Search"
          sx={{
            backgroundColor: "rgba(0,0,0,.08)",
            borderRadius: "6px 0 0 6px",
            width: 355,
            height: 36,
            border: mode === "dark" ? "1px solid grey" : "1px solid black",
            input: {
              textAlign: "justify",
              height: 36,
              padding: "0 0 0 5px",
              "&::placeholder": {
                opacity: 0.7,
                fontSize: "15px",
              },
              "&:focus": {
                backgroundColor: mode === "dark" ? "black" : "white",
                outline: "3px solid #772ce8",
                borderRadius: "6px 0 0 6px",
              },
            },
            fieldset: {
              border: "none",
            },
          }}
        />

        <IconButton
          sx={{
            bgcolor: mode === "dark" ? "#4b4c4d" : "rgba(0,0,0,.08)",
            height: 36,
            width: 34,
            borderRadius: "0 5px 5px 0",
          }}
        >
          <Search />
        </IconButton>
      </Stack>
      <Stack direction="row" gap={0.5} mr={1.5}>
        <StyledTooltip title="Prime Loot">
          <StyledIconButton
            aria-describedby={crownId}
            onClick={handleCrownMenu}
          >
            <Icon path={mdiCrown} size={1} />
          </StyledIconButton>
        </StyledTooltip>
        <Popover
          id={crownId}
          anchorEl={anchorCrown}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={openCrown}
          onClose={handleCloseCrownMenu}
          disableEnforceFocus={true}
        >
          <CrownPopup handleCloseCrownMenu={handleCloseCrownMenu} />
        </Popover>
        <Button
          sx={{
            fontSize: "11px",
            fontWeight: "bold",
            color: mode === "dark" ? "white" : "black",
            backgroundColor: mode === "dark" ? "#363636" : "rgba(0,0,0,.08)",
            padding: "0 5px",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,.12)",
            },
          }}
          onClick={openModal}
        >
          Log In
        </Button>
        <LoginModal
          loginModal={loginModal}
          closeModal={closeModal}
          openSignUpModal={openSignUpModal}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ padding: "0 5px", fontSize: "11px", fontWeight: "bold" }}
          onClick={openSignUpModal}
        >
          Sign Up
        </Button>
        <SignUpModal
          signUpModal={signUpModal}
          closeSignUpModal={closeSignUpModal}
          openModal={openModal}
        />
        <StyledIconButton
          id="userButton"
          aria-controls={openUserMenu ? "userButton-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openUserMenu ? "true" : undefined}
          onClick={handleOpenUserMenu}
        >
          <PersonOutlineOutlinedIcon fontSize="small" />
        </StyledIconButton>
        <Menu
          id="userButton-menu"
          anchorEl={anchorUserEl}
          open={openUserMenu}
          onClose={handleCloseUserMenu}
        >
          <StyledMenuItem
            contextMenu="span"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Stack direction="row">
              <DarkModeOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="body2">Dark Theme</Typography>
            </Stack>
            <CustomSwitch checked={mode == "dark"} onChange={colorMode} />
          </StyledMenuItem>
          <Divider />
          <StyledMenuItem
            onClick={() => {
              openModal();
              handleCloseUserMenu();
            }}
          >
            <LoginIcon fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2">Log In</Typography>
          </StyledMenuItem>
        </Menu>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
