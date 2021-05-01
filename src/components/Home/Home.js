import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Card from '../cards/Card';
import {
  activeColor,
  primaryColor,
  secondaryColor,
  flexRowCenter,
} from '../scheme/Scheme';
import icon1 from '../../images/pic2.jfif';
import icon2 from '../../images/pic3.jpeg';
import icon3 from '../../images/pic4.jfif';
import icon4 from '../../images/pic1.jfif';
import { Link } from 'react-router-dom';

import {
  flexRowEvenly,
  sectionPadding,
  sectionPaddingMobile,
} from '../scheme/Scheme';

const useStyles = makeStyles((theme) => ({
  serviceSectionCss: {
    padding: sectionPadding,
    minHeight: '500px',
    marginLeft: '-10px',
    marginBottom: '-10px',
    width: 'calc(100% - 108px)',
    [theme.breakpoints.down('sm')]: {
      padding: sectionPaddingMobile,
      width: '95%',
    },
  },
  serviceWrapperCss: {
    ...flexRowEvenly,
  },
  infoCss: {
    ...flexRowCenter,
  },
  textCss: {
    fontSize: '20px',
    textAlign: 'center',
    marginBottom: '8px',
    color: 'white',
  },
  headingCss: {
    fontSize: '32px',
    textTransform: 'uppercase',
    color: activeColor,
    marginTop: '0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  dividerCss: {
    width: '100%',
    background: 'rgba(0,0,0,0.3)',
    height: '5px',
  },
  btnCss: {
    background: activeColor,
    borderRadius: '30px 30px 0 30px',
    color: 'white',
    width: '200px',
    height: '50px',
    padding: '4px 16px',
    textTransform: 'capitalize',
    display: 'block',
    margin: 'auto',
    marginTop: '18px',
    fontSize: '16px',
    '&:hover': {
      background: primaryColor,
      text: activeColor,
      transition: '0.1s ease-in-out',
    },
  },
}));

function Home() {
  const classes = useStyles();
  const { serviceSectionCss, serviceWrapperCss } = classes;
  const { textCss, headingCss, dividerCss, btnCss } = classes;
  const { infoCss } = classes;

  return (
    <section className={serviceSectionCss}>
      <div className={infoCss}>
        <div>
          <p className={textCss}>Find Your Career</p>
          <h1 className={headingCss}>Anywhere in the world</h1>
          <div className={dividerCss} />
          <Link to="/schools">
            <Button className={btnCss}> Search Now </Button>
          </Link>
        </div>
      </div>
      <div className={serviceWrapperCss}>
        <Card
          cardTitle="Find your future"
          cardDetail="Look up colleges you're interested in"
          cardImg={icon2}
          cardBtn="Contact US"
        />
        <Card
          cardTitle="Find your major"
          cardDetail="See colleges that have your interest field of study"
          cardImg={icon3}
          cardBtn="Contact US"
        />
        <Card
          cardTitle="Find affordable colleges"
          cardDetail="Apply to Colleges You Can Afford"
          cardImg={icon1}
          cardBtn="Contact US"
        />
      </div>
    </section>
  );
}

export default Home;