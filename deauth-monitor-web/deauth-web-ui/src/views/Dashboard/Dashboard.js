import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>watch_later</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Time of Previous Attack</p>
              <h3 className={classes.cardTitle}>Oct 10 12:43 MST</h3>
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
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>slow_motion_video</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>
                Duration of Previous Attack
              </p>
              <h3 className={classes.cardTitle}>13m 27s</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                Duration that most recent de-authentication attack occurred.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>person_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Attackers MAC Address</p>
              <h3 className={classes.cardTitle}>00:14:22:01:23:45</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                MAC address of the most recent attacker
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
              <p className={classes.cardCategory}>Client MAC Address</p>
              <h3 className={classes.cardTitle}>00:99:99:00:99:00</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Icon>info</Icon>
                MAC address of the client
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Attack Durations History</h4>
              <p className={classes.cardCategory}>
                Durations of previous de-authentication attacks in minutes for
                the last 10 days
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Icon>access_time</Icon> Last updated 5 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>
                Todays Attack Duration History
              </h4>
              <p className={classes.cardCategory}>
                Durations of de-authentication attacks in minutes for the last
                24 hours
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Attack History</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={[
                  "Attack No",
                  "Time Occurred",
                  "Attacker Duration",
                  "Attacker MAC",
                  "Client MAC"
                ]}
                tableData={[
                  [
                    "1",
                    "Oct 12 12:43 MST",
                    "27m 22s",
                    "00-14-22-01-23-45",
                    "00-99-99-00-99-00"
                  ],
                  [
                    "2",
                    "Oct 12 12:43 MST",
                    "512m 02s",
                    "00-14-22-01-23-45",
                    "00-99-99-00-99-00"
                  ],
                  [
                    "3",
                    "Oct 11 12:43 MST",
                    "15m 00s",
                    "00-23-01-14-98-19",
                    "00-99-99-00-99-00"
                  ],
                  [
                    "4",
                    "Oct 11 12:43 MST",
                    "75m 14s",
                    "00-14-01-14-98-19",
                    "00-99-99-00-99-00"
                  ],
                  [
                    "5",
                    "Oct 11 12:43 MST",
                    "81m 57s",
                    "00-14-22-01-23-45",
                    "00-99-99-00-99-00"
                  ],
                  [
                    "6",
                    "Oct 9 12:43 MST",
                    "02m 14s",
                    "00-14-22-01-23-45",
                    "00-99-99-00-99-00"
                  ]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Dashboard;
