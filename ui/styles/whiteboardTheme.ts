import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const spacing = 8;

export default createMuiTheme({
  spacing: spacing,
  overrides: {
    MuiContainer: {
      root: {
        paddingTop: spacing * 2,
      },
    },
    MuiCardHeader: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      },
    },
    MuiTypography: {
      h5: {
        textTransform: 'uppercase',
      },
    },
  },
});
