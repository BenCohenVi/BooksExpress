import React from "react";

import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";

import introductionCardStyles from "./IntroductionCard.styles";

const IntroductionCard = () => {
  const classes = introductionCardStyles();

  return (
    <Card raised className={classes.root}>
      <CardHeader
        title={
          <Typography variant="h4" className={classes.title}>
            Amazing Books, Instant Delivery
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="h6">
          Choose which book you would like to read from the selection below and
          enjoy the beauty.
        </Typography>
        <Typography variant="h6">
          All of our books are of the highest quality and are in a brand new
          state!
        </Typography>
      </CardContent>
    </Card>
  );
};

export default IntroductionCard;
