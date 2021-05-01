export const fontFamily = "'Arimo', sans-serif";
export const primaryColor = '#285493';
export const secondaryColor = '#212669';
export const textColor = 'white';
export const textCapitalize = 'capitalize';
export const dividerColor = 'white';
export const mainFontSize = '16px';
export const activeColor = '#ec5e36';
export const sectionPadding = '24px 64px 72px 64px';
export const footerPadding = '32px 64px 16px 64px';

// Mobile Properties
export const sectionPaddingMobile = '24px 24px 64px 24px';
export const footerPaddingMobile = '24px';
export const sideDrawer = {
  width: '250px',
  height: '150vh',
  borderRadius: '0',
  background: activeColor,
  position: 'absolute',
  top: '0',
  right: '0',
  transition: '0.5s cubic-bezier(0.2, 0.9, 0.2, 0.9)',
  boxShadow: `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
  zIndex: '99',
};

// End Of Mobile Properites
const group1 = {
  fontFamily,
  color: textColor,
  textTransform: 'capitalize',
};

export const mainHeading = {
  ...group1,
  fontSize: '32px',
  fontWeight: '700',
};

export const subHeading = {
  ...group1,
  fontSize: '24px',
  fontWeight: '700',
};

export const headingNormal = {
  fontSize: '32px',
  fontWeight: '900',
  color: textColor,
  fontFamily,
};

export const mainText = {
  ...group1,
  fontSize: '18px',
};

export const detailText = {
  fontWeight: '400',
  fontSize: '18px',
  fontFamily,
  color: textColor,
};

export const flexRowBetween = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const flexRowStart = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
export const flexRowEnd = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

export const flexRowCenter = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const flexRowEvenly = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};
export const flexRowBetweenStart = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
};

export const flexRowEvenlyStart = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
};
