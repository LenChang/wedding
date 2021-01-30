import React from "react";
import { useParams } from "react-router-dom";
import { Base64 } from "js-base64";
import { List, ListItem, ListItemText } from "@material-ui/core";

import { contactList, IContack } from "./static/contact";

export default () => {
  const { userId } = useParams<{ userId: string }>();

  const userName = Base64.decode(userId ? userId : "");

  const userInfo = contactList.find((user) => user.userName === userName);

  return (
    <>
      {userInfo && (
        <List>
          <ListItem>
            <ListItemText>{userInfo.userName}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{userInfo.userEmail}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>{userInfo.peopleCount}</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>{userInfo.tableIndex}</ListItemText>
          </ListItem>
        </List>
      )}
    </>
  );
};
