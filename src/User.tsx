import React from "react";
import { useParams } from "react-router-dom";
import { Base64 } from "js-base64";
import QRCode from "qrcode.react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
} from "@material-ui/core";

import { contactList, IContack } from "./static/contact";
import { trafficCar } from "./static/trafficCar";
import {
  witnessMarriageEvent,
  marriageEvent,
  afterParty,
} from "./static/process";
import userInfoCover from "./static/images/weddingCard_User.jpg";
import paperCard from "./static/images/paper.jpg";

export default () => {
  const { userId } = useParams<{ userId: string }>();

  const userName = Base64.decode(userId ? userId : "");

  const userInfo = contactList.find((user) => user.userName === userName);

  const urlString = window.location.href;

  return (
    <div style={{ backgroundColor: "pink" }}>
      <Hidden mdUp>
        <Card
          elevation={3}
          style={{ marginBottom: 20, marginLeft: 20, marginRight: 20 }}
        >
          <CardHeader title="您的邀請函" style={{ textAlign: "center" }} />
          <CardMedia
            image={paperCard}
            title="Paper Card"
            style={{ width: "100%", height: 800 }}
          />
        </Card>
      </Hidden>
      <Card
        elevation={3}
        style={{
          margin: 20,
          backgroundImage: `url(${userInfoCover})`,
          backgroundPosition: "right bottom",
          backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardHeader title="貴賓資訊" />
        <Divider />
        <CardContent>
          {userInfo && (
            <List>
              <ListItem>
                <ListItemText
                  primary="您的電子喜帖網址"
                  secondary={
                    <Typography noWrap>
                      <Link target="_blank" href={urlString}>
                        {urlString}
                      </Link>
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                style={{
                  display: "flex",
                  justifyContent: "left",
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
      {userInfo?.isWitnessMarriage && (
        <Card elevation={3} style={{ margin: 20 }}>
          <CardHeader title="證婚流程" />
          <CardContent>
            <List>
              {witnessMarriageEvent.map((event) => (
                <ListItem>
                  <ListItemText
                    primary={`${event.content}  // ${event.building}`}
                    secondary={event.time}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Card elevation={3} style={{ margin: 20 }}>
        <CardHeader title="午宴資訊" />
        <CardContent>
          <List>
            {marriageEvent.map((event) => (
              <ListItem>
                <ListItemText
                  primary={`${event.content}  // ${event.building}`}
                  secondary={event.time}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <Card elevation={3} style={{ margin: 20 }}>
        <CardHeader title="After Party" />
        <CardContent>
          <List>
            {afterParty.map((event) => (
              <>
                <ListItem>
                  <ListItemText
                    primary={`${event.content}  // ${event.building}`}
                    secondary={event.time}
                  />
                </ListItem>
              </>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};
