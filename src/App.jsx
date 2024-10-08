import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import LangContext, { texts } from "./contexts/LangContext";
import ThemeContext, { themes } from "./contexts/ThemeContext";
import Home from "./views/Home";

const App = () => {
  // Animation
  useEffect(() => {
    AOS.init();
  }, []);

  // Context Theme
  const [theme, setTheme] = useState(themes.dark);
  const handleChangeTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  // Context Text
  const [text, setLang] = useState(texts.en);
  const handleChangeLang = () => {
    setLang(text === texts.es ? texts.en : texts.es);
  };

  // Cursor Config
  const cursorConfig = {
    innerSize: 8,
    outerSize: 44,
    color: theme.cursorColor,
    outerAlpha: 0.3,
    innerScale: 0.7,
    outerScale: 1.2,
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        <LangContext.Provider value={{ text, handleChangeLang }}>
          {theme.addClassLight && <AnimatedCursor {...cursorConfig} />}
          {!theme.addClassLight && <AnimatedCursor {...cursorConfig} />}
          <Home />
        </LangContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
