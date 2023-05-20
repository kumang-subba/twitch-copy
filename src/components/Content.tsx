import { Box } from "@mui/material";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Content = () => {
  return (
    <Box display="flex">
      <SideBar />
      <MainContent />
    </Box>
  );
};

export default Content;
