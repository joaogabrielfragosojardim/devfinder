import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import GlobalStyle from "./styles/global";
import { dark } from "./styles/theme/dark";
import { light } from "./styles/theme/light";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const themePresent = localStorage.getItem("themePresent");
  const [theme, setTheme] = useState(
    themePresent ? JSON.parse(themePresent) : dark
  );
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home
          toggleTheme={toggleTheme}
          theme={theme.title === "light" ? dark : light}
        />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
