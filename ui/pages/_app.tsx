import '@styles/globals.css';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@material-ui/core/styles';
import get from '@api/get';
import { useEffect } from 'react';
import whiteboardTheme from '@styles/whiteboardTheme';

const AppRoot: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  /* clean up SSR CSS classes */
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  return (
    <ThemeProvider theme={whiteboardTheme}>
      <SWRConfig value={{ refreshInterval: 500, fetcher: get, suspense: true }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
};

export default AppRoot;
