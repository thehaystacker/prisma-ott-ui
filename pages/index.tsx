import { makeStyles, Theme } from "@material-ui/core/styles";
import type { NextPage } from "next";
import { FC, useContext } from "react";
import AppContext from "../src/contexts/app";
import useTheme from "../src/hooks/theme";

const useStyles = makeStyles((theme) => ({
  h1: {
    color: theme.palette.text.primary,
  },
}));

const Home: NextPage = () => {
  const { toggleTheme } = useContext(AppContext);
  const styles = useStyles();

  return (
    <div>
      <h1 className={styles.h1}>Hello</h1>

      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default Home;
