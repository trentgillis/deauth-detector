import React from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import AccessTime from "@material-ui/icons/AccessTime";
import moment from 'moment';

import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { lineChartOptions } from "../../variables/charts.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const AttackInfoLineChart = ({ lineChartData }) => {
  const classes = useStyles();

  return (
    <GridItem xs={12} sm={12} md={6}>
      <Card chart>
        <CardHeader color="info">
          <ChartistGraph
            className="ct-chart"
            data={lineChartData}
            type="Line"
            options={lineChartOptions.options}
            listener={lineChartOptions.animation}
          />
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>
            Today's Attack History
              </h4>
          <p className={classes.cardCategory}>
            Number of deauthentication packets sent every hour for the last 12 hours.
              </p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <AccessTime /> Last updated {moment().format('MM/DD/YYYY hh:mm a')}
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default AttackInfoLineChart;