export const spacingMap = {
  // Extra small
  xs1: '0.125rem', // 2px
  xs2: '0.25rem', // 4px
  xs3: '0.5rem', // 8px
  xs4: '0.75rem', // 12px
  xs5: '1rem', // 16px
  // Small
  sm1: '1.25rem', // 20px
  sm2: '1.5rem', // 24px
  sm3: '1.75rem', // 28px
  sm4: '2rem', // 32px
  sm5: '2.25rem', // 36px
  // Medium
  md1: '2.5rem', // 40px
  md2: '3rem', // 48px
  md3: '3.5rem', // 56px
  md4: '3.75rem', // 60x
  md5: '4rem', // 64px
  // Large
  lg1: '4.5rem', // 72px
  lg2: '5rem', // 80px
  lg3: '5.5rem', // 88px
  lg4: '6rem', // 96px
  lg5: '8rem', // 128px
  // Extra Large
  xl1: '9rem', // 144px
  xl2: '10.5rem', // 168px
  xl3: '12.5rem', // 200px
  xl4: '15rem', // 240px
  xl5: '17.5rem', // 280px
};

export const gridFractions = {
  '1/4': '1fr 3fr',
  '1/3': '1fr 2fr',
  '1/2': '1fr 1fr',
  '3/3': '1fr 1fr 1fr',
  '4/4': '1fr 1fr 1fr 1fr',
  '2/3': '2fr 1fr',
  '3/4': '3fr 1fr',
  'auto-start': 'auto 1fr',
  'auto-end': '1fr auto',
};

export const justifyAlignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
};

export const stretchMap = {
  all: `> *  { flex: 1 }`,
  start: `> :first-child { flex: 1 }`,
  end: `> :last-child { flex: 1 }`,
};
