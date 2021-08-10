import { Container, createTheme } from "@material-ui/core";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../../components/Navbar/index";
import PlaneDeck from "../../components/PlaneDeck";

const Homepage = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(true);
  const appliedTheme = createTheme({
    palette: {
      type: prefersDarkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={appliedTheme}>
      <Container>
        <Navbar />
      </Container>
      <PlaneDeck />
    </ThemeProvider>
  );
};

export default Homepage;
