import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type CrownPopupProps = {
  handleCloseCrownMenu: () => void;
};

const CrownPopup = ({ handleCloseCrownMenu }: CrownPopupProps) => {
  return (
    <Box width={350}>
      <Stack
        justifyContent="center"
        alignItems="center"
        m="10px"
        position="relative"
      >
        <Typography fontWeight="bold" fontSize="14px">
          Prime Gaming Loot
        </Typography>
        <IconButton
          sx={{ position: "absolute", right: 2 }}
          onClick={handleCloseCrownMenu}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Divider />
      <Typography fontWeight="bold" fontSize="16px" m="20px">
        Claim With Prime Gaming
      </Typography>
      <Stack m={7}>
        <svg
          width="96%"
          height="96%"
          viewBox="0 0 2090 560.3"
          fill="#9146FF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(-155.62 -165.2)">
            <path d="m168.4 492.4c-3 0-5.2-0.6-6.5-1.9-1.4-1.3-2.1-3.5-2.1-6.7v-229.2c0-3.2 0.7-5.4 2.1-6.7s3.6-1.9 6.5-1.9h24.7c5.3 0 8.5 2.5 9.6 7.6l2.4 8.9c6.9-6.6 15.2-11.9 24.9-15.8s19.6-5.8 29.7-5.8c22.2 0 39.8 8.1 52.8 24.4s19.4 38.3 19.4 66c0 19-3.2 35.6-9.6 49.8s-15.1 25.1-26.1 32.8-23.6 11.5-37.8 11.5c-9.4 0-18.3-1.5-26.8-4.5s-15.7-7.1-21.6-12.4v75.3c0 3.2-0.6 5.4-1.9 6.7s-3.5 1.9-6.7 1.9zm75.3-104.8c12.8 0 22.3-4.4 28.4-13.1s9.1-22.5 9.1-41.2c0-19-3-32.9-8.9-41.6-6-8.7-15.5-13.1-28.5-13.1-11.9 0-23.1 3.1-33.7 9.3v90.4c10 6.2 21.2 9.3 33.6 9.3z" />
            <path d="m374.2 421.6c-3 0-5.2-0.7-6.5-2.1s-2.1-3.5-2.1-6.5v-158.4c0-3.2 0.7-5.4 2.1-6.7s3.5-1.9 6.5-1.9h24.8c5.3 0 8.5 2.5 9.6 7.6l4.5 18.6c9.2-10.1 17.8-17.2 26-21.5 8.1-4.2 16.8-6.4 26-6.4h4.8c3.2 0 5.5 0.6 6.9 1.9s2.1 3.5 2.1 6.7v28.9c0 3-0.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1c-1.6 0-3.7-0.1-6.2-0.4-2.5-0.2-5.7-0.3-9.6-0.3-5.3 0-11.7 0.8-19.2 2.2-7.6 1.5-14 3.4-19.2 5.7v115.4c0 3-0.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1z" />
            <path d="m528.1 218.8c-8.7 0-15.7-2.4-21-7.2s-7.9-11.3-7.9-19.6 2.6-14.8 7.9-19.6 12.2-7.2 21-7.2c8.7 0 15.7 2.4 21 7.2s7.9 11.3 7.9 19.6-2.6 14.8-7.9 19.6-12.3 7.2-21 7.2zm-16.5 202.8c-3 0-5.1-0.7-6.5-2.1s-2.1-3.5-2.1-6.5v-158.4c0-3.2 0.7-5.4 2.1-6.7s3.5-1.9 6.5-1.9h33c3.2 0 5.4 0.6 6.7 1.9s1.9 3.5 1.9 6.7v158.4c0 3-0.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1z" />
            <path d="m604.3 421.6c-3 0-5.2-0.7-6.5-2.1-1.4-1.4-2.1-3.5-2.1-6.5v-158.4c0-3.2 0.7-5.4 2.1-6.7s3.5-1.9 6.5-1.9h24.7c5.3 0 8.5 2.5 9.6 7.6l2.8 9.3c12.1-8 23.1-13.7 32.8-17s19.8-5 30.1-5c20.6 0 35.2 7.3 43.6 22 11.7-7.8 22.7-13.4 33-16.8s21-5.2 32-5.2c16 0 28.5 4.5 37.3 13.4s13.2 21.4 13.2 37.5v121.2c0 3-0.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1h-33c-3 0-5.2-0.7-6.5-2.1-1.4-1.4-2.1-3.5-2.1-6.5v-110.3c0-15.6-7-23.4-21-23.4-12.4 0-24.9 3-37.5 8.9v124.8c0 3-0.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1h-33c-3 0-5.2-0.7-6.5-2.1s-2.1-3.5-2.1-6.5v-110.3c0-15.6-7-23.4-21-23.4-12.8 0-25.4 3.1-37.8 9.3v124.4c0 3-0.6 5.1-1.9 6.5s-3.5 2.1-6.7 2.1z" />
            <path d="m982.7 426.7c-28.4 0-50.2-7.8-65.5-23.4-15.2-15.6-22.8-37.9-22.8-67 0-29.8 7.8-53.2 23.4-70.1s37.2-25.4 65-25.4c21.3 0 38 5.2 50 15.5s18 24.1 18 41.2c0 17.2-6.5 30.2-19.4 39-13 8.8-32 13.2-57.2 13.2-13.1 0-24.4-1.3-34-3.8 1.4 15.4 6 26.4 13.9 33s19.9 10 35.9 10c6.4 0 12.7-0.4 18.7-1.2 6.1-0.8 14.5-2.6 25.3-5.3 0.7-0.2 1.4-0.4 2.1-0.5s1.3-0.2 1.7-0.2c3.9 0 5.8 2.6 5.8 7.9v15.8c0 3.7-0.5 6.2-1.5 7.7s-3 2.8-6 4c-16.9 6.4-34.6 9.6-53.4 9.6zm-11.4-107.9c11.7 0 20.2-1.8 25.4-5.3s7.9-9 7.9-16.3c0-14.4-8.6-21.6-25.8-21.6-22 0-34.7 13.5-38.2 40.6 9.3 1.7 19.5 2.6 30.7 2.6z" />
            <path
              d="m964.7 614.7c-98 72.3-240.1 110.8-362.4 110.8-171.5 0-325.9-63.4-442.7-168.9-9.2-8.3-1-19.6 10-13.2 126.1 73.4 282 117.5 443 117.5 108.6 0 228-22.5 337.9-69.2 16.5-7 30.4 11 14.2 23z"
              fillRule="evenodd"
            />
            <path
              d="m1005.5 568.1c-12.5-16-82.9-7.6-114.5-3.8-9.6 1.2-11-7.2-2.4-13.3 56.1-39.4 148-28 158.7-14.8 10.8 13.3-2.8 105.5-55.4 149.4-8.1 6.8-15.8 3.2-12.2-5.8 11.8-29.5 38.3-95.6 25.8-111.7z"
              fillRule="evenodd"
            />
            <path d="m1218.5 496.8c-18.9 0-36.6-3.5-53-10.4-2.8-1.1-4.6-2.4-5.5-3.8s-1.4-3.6-1.4-6.6v-10c0-4.2 1.4-6.2 4.2-6.2 1.4 0 3.1 0.4 5 1 2 0.7 4.7 1.5 8.1 2.4 14.3 3.9 27.6 5.9 39.8 5.9 18.5 0 32-4.4 40.5-13.3s12.8-23.1 12.8-42.8v-15.6c-7.8 6.7-16.3 11.8-25.3 15.4s-18.1 5.4-27.3 5.4c-14.8 0-27.6-3.7-38.4-11.1s-19.2-17.6-24.9-30.8c-5.8-13.1-8.7-28.3-8.7-45.3 0-27.7 6.6-49.7 19.7-65.9 13.2-16.3 30.8-24.4 53-24.4 20.8 0 38.9 7.2 54.3 21.5l1.7-9.7c0.5-2.5 1.3-4.3 2.6-5.2s3.1-1.4 5.4-1.4h14.9c4.6 0 6.9 2.3 6.9 6.9v157.8c0 27.5-7.3 48.7-22 63.7-14.6 15-35.4 22.5-62.4 22.5zm8-106.3c14.3 0 28.5-5.3 42.6-15.9v-91c-6.9-5.3-14-9.2-21.1-11.6-7.2-2.4-15-3.6-23.5-3.6-30 0-45 20.4-45 61.3 0 20.1 4 35.2 11.9 45.5 7.9 10.2 19.6 15.3 35.1 15.3z" />
            <path d="m1389.1 425.8c-16.4 0-29.5-4.7-39.3-14s-14.7-21.9-14.7-37.6c0-16.8 6-30.3 18-40.3s28.2-15.1 48.5-15.1c12.9 0 27.4 2 43.6 5.9v-22.8c0-12.5-2.8-21.2-8.5-26.3s-15.3-7.6-28.9-7.6c-15.9 0-31.5 2.3-46.7 6.9-5.3 1.6-8.7 2.4-10 2.4-2.8 0-4.2-2.1-4.2-6.2v-9.4c0-3 0.5-5.2 1.4-6.6s2.8-2.6 5.5-3.8c7.2-3.2 16.2-5.8 27.2-7.8 10.9-2 21.8-2.9 32.7-2.9 21.9 0 38.1 4.6 48.5 13.7s15.6 23 15.6 41.7v118.4c0 4.6-2.3 6.9-6.9 6.9h-14.9c-4.4 0-6.9-2.2-7.6-6.6l-1.7-11.4c-8.3 7.2-17.5 12.7-27.5 16.6-10.3 4-20.2 5.9-30.1 5.9zm8.3-25.9c7.6 0 15.6-1.5 23.9-4.5s16.3-7.4 23.9-13.1v-35.3c-12.5-3-24.7-4.5-36.7-4.5-26.1 0-39.1 10-39.1 30.1 0 8.8 2.4 15.5 7.3 20.2 4.7 4.7 11.7 7.1 20.7 7.1z" />
            <path d="m1527.5 421.3c-4.6 0-6.9-2.3-6.9-6.9v-161.6c0-4.6 2.3-6.9 6.9-6.9h15.2c2.3 0 4.1 0.5 5.4 1.4s2.1 2.6 2.6 5.2l2.1 11.1c22.2-15.2 43.7-22.8 64.7-22.8 21.5 0 36 8.2 43.6 24.6 22.8-16.4 45.7-24.6 68.5-24.6 15.9 0 28.2 4.5 36.7 13.5s12.8 21.8 12.8 38.4v121.8c0 4.6-2.3 6.9-6.9 6.9h-20.4c-4.6 0-6.9-2.3-6.9-6.9v-112.2c0-11.5-2.2-20.1-6.6-25.6s-11.3-8.3-20.8-8.3c-16.8 0-33.8 5.2-50.9 15.6 0.2 1.6 0.3 3.4 0.3 5.2v5.5 119.8c0 4.6-2.3 6.9-6.9 6.9h-20.4c-4.6 0-6.9-2.3-6.9-6.9v-112.2c0-11.5-2.2-20.1-6.6-25.6s-11.3-8.3-20.8-8.3c-17.5 0-34.4 5.1-50.5 15.2v130.8c0 4.6-2.3 6.9-6.9 6.9z" />
            <path d="m1839.6 214.7c-6.7 0-11.9-1.9-15.8-5.7-3.8-3.8-5.7-8.8-5.7-15.1 0-6.2 1.9-11.2 5.7-15.1 3.8-3.8 9.1-5.7 15.8-5.7s11.9 1.9 15.8 5.7c3.8 3.8 5.7 8.8 5.7 15.1 0 6.2-1.9 11.2-5.7 15.1-3.9 3.8-9.2 5.7-15.8 5.7zm-10.4 206.6c-4.6 0-6.9-2.3-6.9-6.9v-161.6c0-4.6 2.3-6.9 6.9-6.9h20.4c4.6 0 6.9 2.3 6.9 6.9v161.6c0 4.6-2.3 6.9-6.9 6.9z" />
            <path d="m1907.1 421.3c-4.6 0-6.9-2.3-6.9-6.9v-161.6c0-4.6 2.3-6.9 6.9-6.9h15.2c2.3 0 4.1 0.5 5.4 1.4s2.1 2.6 2.6 5.2l2.1 12.8c21.9-16.4 45-24.6 69.2-24.6 16.8 0 29.7 4.4 38.4 13.3 8.8 8.9 13.2 21.8 13.2 38.6v121.8c0 4.6-2.3 6.9-6.9 6.9h-20.4c-4.6 0-6.9-2.3-6.9-6.9v-110.4c0-12.2-2.5-21.2-7.4-27-5-5.8-12.8-8.6-23.4-8.6-18.2 0-36.1 5.9-53.7 17.6v128.4c0 4.6-2.3 6.9-6.9 6.9z" />
            <path d="m2161.2 496.8c-18.9 0-36.6-3.5-53-10.4-2.8-1.1-4.6-2.4-5.5-3.8s-1.4-3.6-1.4-6.6v-10c0-4.2 1.4-6.2 4.2-6.2 1.4 0 3.1 0.4 5 1 2 0.7 4.7 1.5 8.1 2.4 14.3 3.9 27.6 5.9 39.8 5.9 18.5 0 32-4.4 40.5-13.3s12.8-23.1 12.8-42.8v-15.6c-7.9 6.7-16.3 11.8-25.3 15.4s-18.1 5.4-27.4 5.4c-14.8 0-27.6-3.7-38.4-11.1-10.9-7.4-19.2-17.6-24.9-30.8-5.8-13.1-8.6-28.3-8.6-45.3 0-27.7 6.6-49.7 19.7-65.9 13.1-16.3 30.8-24.4 53-24.4 20.8 0 38.9 7.2 54.3 21.5l1.7-9.7c0.5-2.5 1.3-4.3 2.6-5.2s3.1-1.4 5.4-1.4h14.9c4.6 0 6.9 2.3 6.9 6.9v157.8c0 27.5-7.3 48.7-22 63.7-14.6 15-35.4 22.5-62.4 22.5zm8-106.3c14.3 0 28.5-5.3 42.6-15.9v-91c-6.9-5.3-14-9.2-21.1-11.6-7.2-2.4-15-3.6-23.5-3.6-30 0-45 20.4-45 61.3 0 20.1 4 35.2 11.9 45.5 7.9 10.2 19.6 15.3 35.1 15.3z" />
          </g>
        </svg>
      </Stack>
      <Typography m="20px" fontSize="13px">
        Support your favorite streamer, plus get monthly games and in-game loot,
        and loads more with Prime Gaming.
      </Typography>
      <Stack m="20px">
        <Button
          variant="contained"
          color="secondary"
          sx={{ height: "28px", fontWeight: "bold", fontSize: "12px" }}
        >
          Start Your Free Trial
        </Button>
      </Stack>
    </Box>
  );
};

export default CrownPopup;
