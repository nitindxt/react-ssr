// import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        {/* <BrowserRouter> moving this to ClientApp as this only runs on browser(client-side) and not in node(ssr)*/}
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
        {/* </BrowserRouter> */}
      </ThemeContext.Provider>
    </StrictMode>
  );
};

// render(<App />, document.getElementById("root")); //moving this to ClientApp for ssr
export default App;
