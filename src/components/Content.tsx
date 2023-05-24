import { Box } from "@mui/material";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Content = () => {
  return (
    <Box display="flex" sx={{ m: 0, p: 0 }}>
      <SideBar />
      <MainContent />
    </Box>
  );
};

export default Content;
