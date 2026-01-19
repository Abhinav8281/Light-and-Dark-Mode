import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const current_them = localStorage.getItem("current_them");
  const [theme, setTheme] = useState(current_them ? current_them : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
