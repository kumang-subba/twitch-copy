import { Box, CssBaseline } from "@mui/material";
import BottomText from "./components/BottomText";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import { DarkModeProvider } from "./context/DarkMode";

function App() {
  return (
    <DarkModeProvider>
      <CssBaseline>
        <Box>
          <NavBar />
          <Content />
          <BottomText />
        </Box>
      </CssBaseline>
    </DarkModeProvider>
  );
}

export default App;
