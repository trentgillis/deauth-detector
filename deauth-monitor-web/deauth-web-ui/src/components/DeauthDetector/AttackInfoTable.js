import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as _ from 'lodash';

import GridItem from "../../components/Grid/GridItem.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const AttackInfoTable = ({ tableData }) => {
  const classes = useStyles();

  return (
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Attack History</h4>
          <p className={classes.cardCategoryWhite}>
            List of all detected deauthentication attacks.
              </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="info"
            tableHead={[
              "Attack No",
              "Time Occurred",
              "Packet Type Sent",
              "Victim MAC",
              "Router MAC"
            ]}
            tableData={tableData}
          />
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default AttackInfoTable;
