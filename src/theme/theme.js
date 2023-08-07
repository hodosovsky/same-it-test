const theme = {
  colors: {
    bg: '#F0F3F4',
    textP: '#A93226',
    title: '#D7DBDD',
    border: '#979A9A',
    hover: '#1EE83A',
    hoverText: '#F7DC6F',
    btnBg: '#FEF9E7',
    btnHover: '#32EFDB',
    error: '#ff2b77',
    disabled: '#323235',
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  sizes: {
    w: { full: '100vw', max: '100%', med: '50%', min: '25%' },
    h: { full: '100vh', max: '100%', min: '30px' },
  },
  fontWeights: {
    nornal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heading: 700,
  },

  borders: {
    none: 'none',
    primary: '1px solid',
    secondary: '3px solid',
  },
  radii: {
    min: '4px',
    med: '6px',
    max: '8px',
    round: '50%',
  },
};

export default theme;
