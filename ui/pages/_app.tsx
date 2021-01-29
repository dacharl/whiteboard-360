import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import DayJsUtils from '@date-io/dayjs';
import { ThemeProvider } from '@material-ui/core/styles';
import whiteboardTheme from '@styles/whiteboardTheme';

const AppRoot: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={whiteboardTheme}>
      <MuiPickersUtilsProvider utils={DayJsUtils}>
        <Component {...pageProps} />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default AppRoot;
