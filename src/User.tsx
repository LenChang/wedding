import React from "react";
import { useParams } from "react-router-dom";
import { Base64 } from "js-base64";
import QRCode from "qrcode.react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

import { contactList, IContack } from "./static/contact";
import { trafficCar } from "./static/trafficCar";

export default () => {
  const { userId } = useParams<{ userId: string }>();

  const userName = Base64.decode(userId ? userId : "");

  const userInfo = contactList.find((user) => user.userName === userName);

  const urlString = window.location.href;

  return (
    <>
      <Card elevation={3} style={{ margin: 20 }}>
        <CardHeader title="貴賓資訊" />
        <Divider />
        <CardContent>
          {userInfo && (
            <List>
              <ListItem>
                <ListItemText
                  primary="您的電子喜帖網址"
                  secondary={urlString}
                />
              </ListItem>
              <ListItem
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Box>
                  <QRCode value={urlString} />
                </Box>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="您的大名"
                  secondary={userInfo.userName}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="您的Email"
                  secondary={
                    userInfo.userEmail ? userInfo.userEmail : "無 Email"
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="您的人數"
                  secondary={userInfo.peopleCount}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="您的桌位"
                  secondary={
                    userInfo.tableIndex
                      ? userInfo.tableIndex
                      : "未定，請洽現場工作人員"
                  }
                />
              </ListItem>
            </List>
          )}
        </CardContent>
      </Card>
      <Card elevation={3} style={{ margin: 20 }}>
        <CardHeader title="乘車資訊" />
        <Divider />
        <CardContent>
          <List>
            <ListItem>
              <ListItemText
                primary="搭車時間"
                secondary={trafficCar.rideTime}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="搭車地點"
                secondary={trafficCar.rideLocation}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="搭車地點 (Google Map)"
                secondary={trafficCar.rideGoogleMap}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>
  );
};
