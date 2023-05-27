const typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },

  fonts: {
    heading: `'ibm-SB', 'Apple SD Gothic Neo', Arial, sans-serif`,
    body: `'ibm-R', 'Apple SD Gothic Neo', Arial, sans-serif`,
    mono: `'ibm-L', 'Apple SD Gothic Neo', Arial, sans-serif`,
    djh: `'djh'`,
    "ibm-EL": `'ibm-EL'`,
    "ibm-L": `'ibm-L'`,
    "ibm-R": `'ibm-R'`,
    "ibm-T": `'ibm-T'`,
    "ibm-M": `'ibm-M'`,
    "ibm-SB": `'ibm-SB'`,
    "ibm-B": `'ibm-B'`,
  },

  fontSizes: {
    // web size 기준
    "2xs": "0.55rem", // 11px
    xs: "0.6rem", // 12px
    sm: "0.65rem", // 13px
    md: "0.7rem", // 14px (small)
    lg: "0.75rem", // 15px
    xl: "0.8rem", // 16px (p)
    "2xl": "0.9rem", // 18px (h6)
    "3xl": "1rem", // 20px (h5)
    "4xl": "1.1rem", // 22px (h4)
    "5xl": "1.2rem", // 24px (h3)
    "6xl": "1.3rem", // 26px (h2)
    "7xl": "1.4rem", // 28px (h1)
    "8xl": "1.5rem", // 30px
    "9xl": "1.6rem", // 32px

    // Title: type, Text: size
    small: "0.7rem", // 14px (small)
    p: "0.8rem", // 16px (p) / default
    h6: "0.9rem", // 18px (h6)
    h5: "1rem", // 20px (h5)
    h4: "1.1rem", // 22px (h4)
    h3: "1.2rem", // 24px (h3)
    h2: "1.3rem", // 26px (h2)
    h1: "1.4rem", // 28px (h1)
  },
};
export default typography;
