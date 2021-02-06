import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import SearchPage from "./SearchPage";
import User from "./User";
import backgroundPicture from "./static/images/main.jpg";

const images = [
  {
    url: backgroundPicture,
    title: "開始",
    width: "100%",
  },
];

const useStyles = makeStyles((theme) => ({
  topRoot: {
    "& > *": {
      margin: theme.spacing(5),
    },
  },

  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 800,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 300,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const FirstPage = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.topRoot}>
      <Card>
        <CardHeader title="懷倫-冠陵電子喜帖 v0.0.1" />
        <CardContent>
          <div className={classes.root}>
            {images.map((image) => (
              <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                onClick={() => {
                  history.push("/search");
                }}
                style={{
                  width: image.width,
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            ))}
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default function App() {
  return (
    <HashRouter
      basename={process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}
    >
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/user/:userId" children={<User />} />
          <Route path="/">
            <FirstPage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
