import Icon from "@mdi/react";
import {
  Box,
  Button,
  CircularProgress,
  Collapse,
  Fade,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { mdiTwitch } from "@mdi/js";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DoDisturbOnRoundedIcon from "@mui/icons-material/DoDisturbOnRounded";
import SignUpStep from "./SignUpStep";
import { useDarkModeContext } from "../context/DarkMode";

type SignUpModalProps = {
  signUpModal: boolean;
  closeSignUpModal: () => void;
  openModal: () => void;
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  height: 400,
};
const StyledOutlineInput = styled(OutlinedInput)({
  borderRadius: "5px",
  height: 30,
  fontSize: "13px",
  input: {
    textAlign: "justify",
    height: 30,
    padding: "5px 0 0 5px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "4px solid #721de0",
    borderRadius: "5px",
  },
  "&.Mui-error .MuiOutlinedInput-notchedOutline ": {
    border: "4px solid red",
    borderRadius: "5px",
  },
});

type userForm = {
  username: string;
  password: string;
};

const SignUpModal = ({
  signUpModal,
  closeSignUpModal,
  openModal,
}: SignUpModalProps) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [userForm, setUserForm] = useState<userForm>({
    username: "",
    password: "",
  });
  const [touchedUsername, setTouchedUsername] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
    handleQuery();
  };
  const handleTouchedUsername = () => {
    setTouchedUsername(true);
  };

  const [queryUser, setQueryUser] = useState<
    "idle" | "progress" | "success" | "failed"
  >("idle");
  const [queryPass, setQueryPass] = useState<
    "idle" | "progress" | "success" | "failed"
  >("idle");
  const timerRef = useRef<number>();

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );
  const handleQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setQueryUser("progress");
    setQueryPass("progress");
    timerRef.current = window.setTimeout(() => {
      if (userForm.username.length > 4 && userForm.username.length < 25) {
        setQueryUser("success");
      } else {
        setQueryUser("failed");
      }
      if (userForm.password.length > 8) {
        setQueryPass("success");
      } else {
        setQueryPass("failed");
      }
    }, 1000);
  };
  const [steps, setSteps] = useState(1);
  const { mode } = useDarkModeContext();

  return (
    <Modal open={signUpModal} onClose={closeSignUpModal}>
      <Box sx={style}>
        <Stack justifyContent="center" alignItems="center" position="relative">
          <IconButton
            sx={{ alignSelf: "flex-end", justifySelf: "flex-start" }}
            onClick={closeSignUpModal}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          <Stack direction="row" alignItems="center">
            <Icon path={mdiTwitch} size={2.5} color="#9146ff" />
            <Typography variant="h6" fontWeight="bold">
              Join Twitch Today
            </Typography>
          </Stack>
        </Stack>
        <Box
          m={2}
          sx={{ display: "flex", flexDirection: "column", height: 200 }}
        >
          {steps === 1 ? (
            <>
              <Typography fontSize={11} mb={2}>
                Creating an account allows you to participate in chat, follow
                your favorite channels, and broadcast from your own channel.
              </Typography>
              <Stack direction="row" justifyContent="space-between">
                <InputLabel
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginBottom: 0.5,
                    color: mode === "dark" ? "white" : "black",
                  }}
                  htmlFor="username"
                >
                  Username
                </InputLabel>
                {queryUser === "success" ? (
                  <CheckCircleRoundedIcon sx={{ height: 14, color: "green" }} />
                ) : queryUser === "failed" ? (
                  <DoDisturbOnRoundedIcon
                    fontSize="small"
                    sx={{ height: 14, color: "red" }}
                  />
                ) : (
                  <Fade in={queryUser === "progress"} unmountOnExit>
                    <CircularProgress
                      size={15}
                      sx={{ color: mode === "dark" ? "white" : "black" }}
                    />
                  </Fade>
                )}
              </Stack>
              <StyledOutlineInput
                fullWidth
                name="username"
                onChange={handleChange}
                value={userForm.username}
                onFocus={handleTouchedUsername}
                onBlur={() => setTouchedUsername(false)}
                error={
                  (userForm.username.length < 4 &&
                    userForm.username.length > 0) ||
                  userForm.username.length > 25
                }
              />
              <Collapse
                orientation="vertical"
                in={touchedUsername}
                timeout={{
                  enter: 200,
                  exit: 100,
                }}
              >
                {(userForm.username.length < 4 &&
                  userForm.username.length > 0) ||
                userForm.username.length > 25 ? (
                  <FormHelperText sx={{ fontSize: 11 }} error>
                    *Usernames must be between 4 and 25 characters
                  </FormHelperText>
                ) : (
                  <FormHelperText sx={{ fontSize: 11 }}>
                    This is the name people will know you by on Twitch. You can
                    always change it later.
                  </FormHelperText>
                )}
              </Collapse>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <InputLabel
                  sx={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: 2,
                    color: mode === "dark" ? "white" : "black",
                  }}
                  htmlFor="password"
                >
                  Password
                </InputLabel>
                {queryPass === "success" ? (
                  <CheckCircleRoundedIcon
                    sx={{ height: 14, color: "green", mb: 1 }}
                  />
                ) : queryPass === "failed" ? (
                  <DoDisturbOnRoundedIcon
                    fontSize="small"
                    sx={{ height: 14, color: "red", mb: 1 }}
                  />
                ) : (
                  <Fade in={queryPass === "progress"} unmountOnExit>
                    <CircularProgress
                      size={15}
                      sx={{ color: mode === "dark" ? "white" : "black", mb: 1 }}
                    />
                  </Fade>
                )}
              </Stack>
              <StyledOutlineInput
                fullWidth
                type={showPass ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={userForm.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => {
                        setShowPass(!showPass);
                      }}
                    >
                      {showPass ? (
                        <VisibilityOffOutlinedIcon fontSize="small" />
                      ) : (
                        <VisibilityOutlinedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                error={userForm.password != "" && userForm.password.length < 8}
              />
              {userForm.password != "" && userForm.password.length < 8 && (
                <FormHelperText sx={{ fontSize: 11 }} error>
                  *Passwords must be at least 8 characters long.
                </FormHelperText>
              )}
            </>
          ) : (
            <SignUpStep />
          )}
        </Box>
        <Stack direction="column" ml={2} mr={2} justifySelf="flex-end">
          <Typography
            fontWeight="bold"
            sx={{ fontSize: 11 }}
            alignSelf="center"
            mb={1}
          >
            Step {steps} of 3
          </Typography>
          {steps === 1 ? (
            <Stack direction="row" justifyContent="space-between">
              <Button
                color="secondary"
                sx={{
                  fontWeight: "bold",
                  fontSize: 12,
                  transition: "background 0s,color 0s",
                  "&:hover": {
                    backgroundColor:
                      mode === "dark" ? "#363636" : "rgba(0,0,0,.12)",
                    color: mode === "dark" ? "white" : "black",
                  },
                }}
                onClick={() => {
                  closeSignUpModal();
                  openModal();
                }}
              >
                Already a Twitch user? Log in
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: "bold", fontSize: 12 }}
                onClick={() => setSteps((p) => p + 1)}
                disabled={!(queryPass === "success" && queryUser === "success")}
              >
                Next Step
              </Button>
            </Stack>
          ) : (
            <Stack direction="row" justifyContent="space-between">
              <Button
                sx={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: mode === "dark" ? "white" : "black",
                  backgroundColor:
                    mode === "dark" ? "#292828" : "rgba(0,0,0,.08)",

                  "&:hover": {
                    backgroundColor:
                      mode === "dark" ? "#363636" : "rgba(0,0,0,.12)",
                    color: mode === "dark" ? "white" : "black",
                  },
                }}
                onClick={() => setSteps((prev) => prev - 1)}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ fontWeight: "bold", fontSize: 12 }}
                disabled
              >
                Next Step
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
