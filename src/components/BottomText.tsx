import { Button, Stack, Toolbar, Typography, styled } from "@mui/material";
import { useDarkModeContext } from "../context/DarkMode";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "#6531B2",
  position: "fixed",
  bottom: 0,
  right: 0,
  left: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: theme.zIndex.drawer + 1,
}));
const BottomText = () => {
  const { openSignUpModal } = useDarkModeContext();
  return (
    <StyledToolbar>
      <Stack direction="row" alignItems="center">
        <img
          src="/images/twitchbotlogo.png"
          style={{ height: "40px", paddingRight: "5px" }}
        />
        <Typography variant="h6" color={"white"} fontWeight={"bold"} mr={1}>
          Join the Twitch community!
        </Typography>
        <Typography variant="body1" color={"white"}>
          Discover the best live streams anywhere.
        </Typography>
      </Stack>
      <Button
        sx={{
          backgroundColor: "white",
          color: "black",
          fontSize: "13px",
          fontWeight: "bold",
          height: "30px",
          "&:hover": {
            backgroundColor: "#b8b8b8",
          },
        }}
        onClick={openSignUpModal}
      >
        Sign Up
      </Button>
    </StyledToolbar>
  );
};

export default BottomText;
