import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import GlobalStyle from "./styles/global";
import { dark } from "./styles/theme/dark";
import { light } from "./styles/theme/light";

function App() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Home toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
