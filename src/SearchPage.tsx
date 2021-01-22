import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Paper,
  TextField,
  Typography,
  Toolbar,
  CardActions,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import backgroundPicture from "./static/images/main.jpg";

export default () => {
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              history.push("/");
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
            請輸入您的 大名 或者 Email
          </Typography>
        </Toolbar>
      </AppBar>
      <Card style={{ margin: 10 }}>
        <CardMedia
          style={{ width: "100%", height: 340 }}
          image={backgroundPicture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <TextField id="name-input" label="您的大名" />
          <TextField id="name-input" label="您的 Email" />
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant="contained">
            查詢
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
