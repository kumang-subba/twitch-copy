import { ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

type DarkModeProviderProps = {
  children: ReactNode;
};
type DarkModeContext = {
  mode: "light" | "dark";
  colorMode: () => void;
  signUpModal: boolean;
  closeSignUpModal: () => void;
  openSignUpModal: () => void;
  drawerOpen: boolean;
  expandDrawer: () => void;
  kFormatter: (num: number) => number | string;
};
const DarkModeContext = createContext({} as DarkModeContext);

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(() => toggleColorMode, []);

  function toggleColorMode() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }
  const [signUpModal, setSignUpModal] = useState<boolean>(false);
  const closeSignUpModal = () => setSignUpModal(false);
  const openSignUpModal = () => setSignUpModal(true);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          secondary: {
            main: "#9146ff",
          },
        },

        typography: {
          button: {
            textTransform: "none",
          },
        },

        components: {
          MuiMenuItem: {
            styleOverrides: {
              root: {
                "&.Mui-disabled": {
                  opacity: 0.8,
                  fontWeight: "bold",
                  fontSize: "13px",
                  padding: "3px 15px",
                },
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                borderRadius: "5px",
                padding: "2px",
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: {
                color: "black",
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                color: mode === "dark" ? grey[500] : grey[700],
              },
            },
          },
        },
      }),
    [mode]
  );
  const [drawerOpen, setDrawerOpen] = useState(true);
  const expandDrawer = () => setDrawerOpen(!drawerOpen);
  const kFormatter = (num: number) => {
    return Math.abs(num) > 999
      ? (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };
  return (
    <DarkModeContext.Provider
      value={{
        mode,
        colorMode,
        signUpModal,
        closeSignUpModal,
        openSignUpModal,
        drawerOpen,
        expandDrawer,
        kFormatter,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </DarkModeContext.Provider>
  );
}
