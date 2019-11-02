import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import AccessTime from "@material-ui/icons/AccessTime";
import Axios from "axios";
import moment from 'moment';

import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { initialBarChart, initialLineChart } from "../../variables/charts.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const Dashboard = () => {
  const [lastAttack, setLastAttack] = useState({});
  const [tableData, setTableData] = useState([]);
  const [barChartData, setBarChartData] = useState({ labels: [], series: [] });
  const [lineChartData, setLineChartData] = useState();

  useEffect(() => {
    (async () => {
      const response = await Axios.get('http://localhost:5000/');
      updateTableData(response.data['deauthAttacks']);
      setLastAttack(response.data['lastAttack']);
    })();
    }, []);

  /**
   * Updates the table state with deauthentication attack history
   * @param deauthAttacks
   */
  const updateTableData = deauthAttacks => {
    // Format the deauth attack history data to be displayed in the table and update the table data state
    const deauthTableData = [];
    deauthAttacks.forEach(deauthAttack => {
      const { id, timeOccurred, attackDuration, attackerMAC, clientMAC } = deauthAttack;
      deauthTableData.push([id, timeOccurred, attackDuration, attackerMAC, clientMAC]);
    });
    setTableData(deauthTableData);
  };

  /**
   * Updates bar chart statewith data from deauthentication attack history
   * @param deauthAttacks
   */
  const updateBarChartData = deauthAttacks => {
    // TODO
  };

  /**
   * Updates line chart state with data from deauthentication attack history for that current day
   * @param deauthAttacks
   */
  const updateLineChartData = deauthAttacks => {
    // TODO
  };

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
              <h3 className={classes.cardTitle}>{lastAttack['timeOccurred']}</h3>
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
              <h3 className={classes.cardTitle}>{lastAttack['attackDuration']}</h3>
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
              <h3 className={classes.cardTitle}>{lastAttack['attackerMAC']}</h3>
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
              <h3 className={classes.cardTitle}>{lastAttack['clientMAC']}</h3>
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
                data={initialBarChart.data}
                type="Bar"
                options={initialBarChart.options}
                responsiveOptions={initialBarChart.responsiveOptions}
                listener={initialBarChart.animation}
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
                data={initialLineChart.data}
                type="Line"
                options={initialLineChart.options}
                listener={initialLineChart.animation}
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
                tableData={tableData}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Dashboard;
