import React from 'react';
import { makeStyles } from '@material-ui/core';
import { flexRowCenter, secondaryColor, textColor } from '../scheme/Scheme';

const useStyles = makeStyles((theme) => ({
  footerCss: {
    ...flexRowCenter,
    background: secondaryColor,
    width: '100%',
    color: textColor,
    '& p': {
      fontWeight: '600',
    },
  },
}));

function Footer() {
  const classes = useStyles();
  const { footerCss } = classes;

  return (
    <div className={footerCss}>
      <p>Copyright © CollegeFinder 2021. All rights reserved.</p>
    </div>
  );
}

export default Footer;