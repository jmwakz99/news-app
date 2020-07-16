import React from "react";
import "./news.styles.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";
import "moment-timezone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(3),
    margin: "30px auto",
    maxWidth: 500,
  },
  title: {
    color: "#1A0DAB",
  },
  source: {
    color: "green",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const News = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="News"
                src={props.habari.urlToImage}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container style={{ textAlign: "left" }}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" className={classes.title}>
                  {props.habari.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  className={classes.source}
                  style={{ cursor: "pointer", display: "inline" }}
                >
                  {props.habari.source.name}
                </Typography>
                <span style={{ display: "inline", opacity: 0.8 }}>
                  {" "}
                  -{" "}
                  <Moment fromNow ago>
                    {props.habari.publishedAt}
                  </Moment>{" "}
                  ago
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default News;
