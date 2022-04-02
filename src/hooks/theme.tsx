import { useState } from "react";
import { dark, light } from "../../styles/theme";

const useTheme = () => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme((prevTheme) => light);
  };

  return { theme, toggleTheme };
};

export default useTheme;
