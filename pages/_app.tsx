import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";
import useTheme from "../src/hooks/theme";
import AppContext from "../src/contexts/app";
import { useState } from "react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const { theme, toggleTheme } = useTheme();
  const [appTheme, setAppTheme] = useState(theme);
  const appContextValues = {
    toggleTheme,
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>MUI5 Nextjs</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={appTheme}>
        <AppContext.Provider value={appContextValues}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </AppContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
