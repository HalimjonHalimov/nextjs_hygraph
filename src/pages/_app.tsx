import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache  } from '@emotion/react'
import createEmotionCache from '../helpers/create-emotion-cache';
import { ThemeProvider } from '@mui/system';
import theme from '../helpers/theme';



const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
