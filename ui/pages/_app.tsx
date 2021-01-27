import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const AppRoot: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default AppRoot;
