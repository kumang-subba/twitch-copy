import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  Modal,
  OutlinedInput,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { mdiTwitch } from "@mdi/js";
import Icon from "@mdi/react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { ChangeEvent, useState } from "react";
import { useDarkModeContext } from "../context/DarkMode";

type LoginModalProps = {
  loginModal: boolean;
  closeModal: () => void;
  openSignUpModal: () => void;
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
  height: 380,
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
});
type userForm = {
  username: string;
  password: string;
};
const LoginModal = ({
  loginModal,
  closeModal,
  openSignUpModal,
}: LoginModalProps) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [userForm, setUserForm] = useState<userForm>({
    username: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };
  const { mode } = useDarkModeContext();
  return (
    <Modal open={loginModal} onClose={closeModal}>
      <Box sx={style}>
        <Stack justifyContent="center" alignItems="center" position="relative">
          <IconButton
            sx={{ alignSelf: "flex-end", justifySelf: "flex-start" }}
            onClick={closeModal}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          <Stack direction="row" alignItems="center">
            <Icon path={mdiTwitch} size={2.5} color="#9146ff" />
            <Typography variant="h6" fontWeight="bold">
              Log in to Twitch
            </Typography>
          </Stack>
        </Stack>
        <Box m={2} sx={{ display: "flex", flexDirection: "column" }}>
          <InputLabel
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              color: mode === "dark" ? "white" : "black",
            }}
            htmlFor="username"
          >
            Username
          </InputLabel>
          <StyledOutlineInput
            fullWidth
            onChange={handleChange}
            name="username"
            value={userForm.username}
          />
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
          <StyledOutlineInput
            fullWidth
            type={showPass ? "text" : "password"}
            onChange={handleChange}
            name="password"
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
          />
          <Link
            href="#"
            underline="none"
            color="secondary"
            sx={{ fontSize: "12px" }}
          >
            Trouble logging in?
          </Link>
          <Button
            variant="contained"
            disabled={userForm.username === "" || userForm.password === ""}
            color="secondary"
            sx={{ height: 30, marginTop: 3, marginBottom: 2 }}
          >
            Login
          </Button>
          <Button
            color="secondary"
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              marginBottom: 5,
              transition: "background 0s,color 0s",
              "&:hover": {
                backgroundColor:
                  mode === "dark" ? "#363636" : "rgba(0,0,0,.12)",
                color: mode === "dark" ? "white" : "black",
              },
            }}
            onClick={() => {
              closeModal();
              openSignUpModal();
            }}
          >
            Don't have an account? Sign up
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
