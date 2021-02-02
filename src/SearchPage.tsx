import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Base64 } from "js-base64";
import {
  AppBar,
  Button,
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Snackbar,
  TextField,
  Typography,
  Toolbar,
  CardActions,
} from "@material-ui/core";

import { contactList, IContack } from "./static/contact";
import backgroundPicture from "./static/images/main.jpg";

export default () => {
  const history = useHistory();

  const [searchTerms, setSearchTerms] = useState<{
    email: string;
    name: string;
  }>({ email: "", name: "" });
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  const handleSearhButtonClick = () => {
    // console.log(searchTerms);

    const result = contactList.find(
      (inviter) =>
        inviter.userEmail === searchTerms?.email ||
        inviter.userName === searchTerms?.name
    );

    if (result) {
      const encodeString = Base64.encode(result.userName);
      return history.push(`/user/${encodeString}`);
    }

    setSnackbarOpen(true);

    // console.log(result);
  };

  const handleNameInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchTerms({ ...searchTerms, name: e.target.value });
  };

  const handleEmailInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchTerms({ ...searchTerms, email: e.target.value });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

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
          <TextField
            id="name-input"
            label="您的大名"
            onChange={handleNameInput}
          />
          <TextField
            id="name-input"
            label="您的 Email"
            onChange={handleEmailInput}
          />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleSearhButtonClick}
          >
            查詢
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="success">
          查無此人
        </MuiAlert>
      </Snackbar>
    </>
  );
};
