import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";
import Wall from "./pages/dashboard/wall";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";

function App() {
  var dark = true;
  const Theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: !dark ? "#fff" : "#000",
        paper: !dark ? "#f8f8f8" : "#1C1B1F",
      },
      text: {
        primary: dark ? "#fff" : "#000",
        secondary: dark ? "#fff" : "#000",
      },
    },
    typography: {
      body2: {
        color: dark ? "#fff" : "#000",
      },
      caption: {
        color: "#4E4C4E",
        fontSize: "10px",
        lineHeight: "1.1",
      },
      h1: {
        color: dark ? "#fff" : "#000",

        textTransform: "uppercase",
        letterSpacing: "2px",
        fontWeight: 700,
        fontSize: "2.6rem",
        "@media (min-width:390px)": { fontSize: "3.1rem" },
        "@media (min-width:768px)": { fontSize: "3.2rem" },
        "@media (min-width:992px)": { fontSize: "3.8rem" },
        "@media (min-width:1200px)": { fontSize: "5.1rem" },
      },
      h2: {
        color: dark ? "#fff" : "#000",

        textTransform: "uppercase",
        letterSpacing: "2px",
        fontWeight: 700,
        fontSize: "1.8rem",
        "@media (min-width:768px)": { fontSize: "2.1rem" },
        "@media (min-width:992px)": { fontSize: "2.2rem" },
        "@media (min-width:1200px)": { fontSize: "3rem" },
      },
      h3: {
        color: dark ? "#fff" : "#000",
        fontSize: "1.3rem",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontWeight: 700,
      },
      subtitle1: {
        color: "#605D62",

        lineHeight: "1.4",
        fontSize: "13px",
        "@media (min-width:768px)": { fontSize: "14px" },
        "@media (min-width:992px)": { fontSize: "15px" },
        "@media (min-width:1200px)": { fontSize: "16px" },
      },
      subtitle2: {
        color: "#fff",
        fontSize: "14px",
        lineHeight: "1.1",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sing-up" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/wall" element={<Wall />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
