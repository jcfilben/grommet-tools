import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

export const grommetToolsTheme = deepMerge(grommet, {
  global: {
    edgeSize: {
      marginXL: '200px',
      animationBox: '380px',
      none: '0px',
    },
    size: {
      cards: '500px',
      gradient1: '5px',
      gradient3: '20px',
      noCodeBox: '527px',
      none: '0px',
    },
    colors: {
      gradient:
        'linear-gradient(111.57deg, #FFF06C -6.47%, #FFCF50 22.58%, #FFA650 49.44%, #FFD8D8 77.04%, #49E2FF 106.08%, #75FFCE 132.95%)',
      DesignerYellow: '#FDEF74',
      ThemerOrange: '#F9D36E',
      ImagerOrange: '#F4AD68',
      PublisherPink: '#FFD8D8',
      SlidesBlue: '#6AE4FB',
      TabularGreen: '#9BFAD8',
      noCodeBackground: 'rgba(0,0,0,0.06)',
      darkGrey: '#666666',
      headingGrey: '#444444',
      lightGrey: 'rgba(0, 0, 0, 0.04)',
      background: {
        light: '#ffffff',
        dark: '#000000',
      },
    },
  },
  icon: {
    size: {
      customSmall: '36px',
      customLarge: '60px',
    },
  },
  heading: {
    level: {
      '1': {
        customMedium: {
          size: '72px',
          height: '88px',
          maxWidth: '1968px',
        },
        customLarge: {
          size: '100px',
          height: '120px',
          maxWidth: '2736px',
        },
      },
    },
  },
});
