import '@styles/globals.css';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@material-ui/core/styles';
import get from '@api/get';
import whiteboardTheme from '@styles/whiteboardTheme';

const AppRoot: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={whiteboardTheme}>
      <SWRConfig value={{ refreshInterval: 500, fetcher: get, suspense: true }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
};

export default AppRoot;
