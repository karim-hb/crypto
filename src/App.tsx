import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import AboutUs from "./pages/aboutUs";
import Dashboard from "./pages/dashboard";
import Wall from "./pages/dashboard/wall";
import Faq from "./pages/FAQ";
import Home from "./pages/home";
import Package from "./pages/package";
import Referall from "./pages/referral";
import SignUp from "./pages/sign-up";
import Signal from "./pages/signal";
import Start from "./pages/start";
import Strategy from "./pages/strategy";
import Transaction from "./pages/transaction";
import Wallet from "./pages/wallet";

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
        "@media (min-width:390px)": { fontSize: "3.1rem", fontWeight: 300 },
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
    containers: {
      maxWidth: "xxl",
      px: "2vw",
    },
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1370,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/faq" element={<Faq />} />

            <Route path="/how-to-use-my-referral-code" element={<Referall />} />
            <Route path="/how-to-use-signals" element={<Signal />} />
            <Route path="/trade-strategy" element={<Strategy />} />

            <Route path="/how-to-start" element={<Start />} />
            <Route path="/packages" element={<Package />} />
            <Route path="/transactions" element={<Transaction />} />
            <Route path="/wallet" element={<Wallet />} />

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
