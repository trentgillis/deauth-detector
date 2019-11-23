import React from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import moment from 'moment';
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { barChartOptions } from "../../variables/charts.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const AttackInfoBarChart = ({ barChartData }) => {
  const classes = useStyles();

  return (
    <GridItem xs={12} sm={12} md={6}>
      <Card chart>
        <CardHeader color="info">
          <ChartistGraph
            className="ct-chart"
            data={barChartData}
            type="Bar"
            options={barChartOptions.options}
            responsiveOptions={barChartOptions.responsiveOptions}
            listener={barChartOptions.animation}
          />
        </CardHeader>
        <CardBody>
          <h4 className={classes.cardTitle}>Attack History</h4>
          <p className={classes.cardCategory}>
            Number of deauthentication packets sent every day for the last 10 days.
          </p>
        </CardBody>
        <CardFooter chart>
          <div className={classes.stats}>
            <Icon>access_time</Icon> Last updated {moment().format('MM/DD/YYYY HH:mm')}
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default AttackInfoBarChart;