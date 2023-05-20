import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import phoneCodes from "../data/phoneCodes.json";
import { useState } from "react";

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

const SignUpStep = () => {
  const [country, setCountry] = useState(
    phoneCodes.find((i) => i.name === "Finland")?.name
  );
  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  return (
    <>
      <Box display="flex" gap={0.5} mb={0.5}>
        <Typography sx={{ fontSize: 12 }}>
          <strong>Phone Number</strong>
        </Typography>
        <Typography sx={{ fontSize: 12, color: "grey" }}>
          (Requires Verification)
        </Typography>
      </Box>
      <Stack direction="row" gap={1}>
        <FormControl fullWidth sx={{ height: 30 }}>
          <Select
            value={country}
            sx={{
              height: 30,
              fontSize: 13,

              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "4px solid #721de0",
                borderRadius: "5px",
              },
              ".MuiPopover-paper": {
                height: "100px",
              },
            }}
            onChange={handleChange}
            MenuProps={{
              sx: { height: 450, width: 230 },
            }}
          >
            {phoneCodes.map((element, index) => (
              <MenuItem
                value={element.name}
                key={index}
                sx={{ height: 20, fontSize: 13 }}
              >
                {element.name} {element.dial_code}
              </MenuItem>
            ))}{" "}
          </Select>
        </FormControl>
        <StyledOutlineInput fullWidth />
      </Stack>
      <Typography sx={{ fontSize: 12, color: "grey", flexGrow: 1 }}>
        Providing a phone number helps improve security
      </Typography>
      <Typography
        sx={{
          fontSize: 11,
          textAlign: "center",
        }}
      >
        Twitch may use your phone number to call or send text messages with
        information regarding your account.
      </Typography>
    </>
  );
};

export default SignUpStep;
