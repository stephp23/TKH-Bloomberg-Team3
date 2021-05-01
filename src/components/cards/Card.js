import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import {
  secondaryColor,
  textColor,
  fontFamily,
  subHeading,
} from '../scheme/Scheme';

const useStyles = makeStyles((theme) => ({
  card: {
    background: secondaryColor,
    width: '250px',
    height: '300px',
    borderRadius: '5px',
    color: textColor,
    padding: '16px 32px',
    margin: '20px',
    boxShadow: `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)`,
    '& h1': {
      ...subHeading,
      padding: '0',
      margin: '0',
    },
    '& p': {
      fontFamily,
    },
    '& img': {
      width: '220px',
      height: '180px',
      borderRadius: '5px',
    },
  },
}));

function ServiceCard({ cardTitle, cardDetail, cardImg, cardBtn }) {
  const classes = useStyles();
  const { card } = classes;
  return (
    <div className={card}>
      <h1>{cardTitle}</h1>
      <p> {cardDetail} </p>
      <img src={cardImg} alt="card-icon" />
    </div>
  );
}

export default ServiceCard;