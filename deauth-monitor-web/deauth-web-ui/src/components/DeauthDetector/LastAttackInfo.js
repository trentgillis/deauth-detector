import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardIcon from "../Card/CardIcon.js";
import CardFooter from "../Card/CardFooter.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const LastAttackInfo = ({ lastAttackData }) => {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>watch_later</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Time of Previous Attack</p>
              <h3 className={classes.cardTitle}>{lastAttackData['timestamp']}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                Time that most recent de-authentication attack occurred.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>slow_motion_video</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>
                Packet Type
              </p>
              <h3 className={classes.cardTitle}>{lastAttackData['type']}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                Type of the packet used in the most recent attack.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>person_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Victims MAC Address</p>
              <h3 className={classes.cardTitle}>{lastAttackData['victim']}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                MAC address of the victim of the attack.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>verified_user</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Attacker's Router MAC Address</p>
              <h3 className={classes.cardTitle}>{lastAttackData['router']}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                MAC address of the client.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>person_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Victim's Router OUI</p>
              <h3 className={classes.cardTitle}>{lastAttackData.victimInfo ? lastAttackData.victimInfo.oui : ''}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                OUI of the victim's router.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>verified_user</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Victim's Router Company Name</p>
              <h3 className={classes.cardTitle}>{lastAttackData.victimInfo ? lastAttackData.victimInfo.company_name : ''}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                Company that manufactured the victim's router.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>watch_later</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Attacker's Router OUI</p>
              <h3 className={classes.cardTitle}>{lastAttackData.routerInfo ? lastAttackData.routerInfo.oui : ''}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                OUI of the router that performed the attack.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>slow_motion_video</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>
                Attacker's Router Company Name
              </p>
              <h3 className={classes.cardTitle}>{lastAttackData.routerInfo ? lastAttackData.routerInfo.company_name : ''}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                Company that manufactured the attacking router.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default LastAttackInfo;