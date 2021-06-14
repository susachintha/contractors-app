import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InputForm from "../components/InputForm"
import AvailableContractors from "../components/AvailableContractors";
import SuccessAlert from "../components/SuccessAlert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const GET_CONTRACTOR_DETAILS = gql`
  query {
    contractors{
        name
        telephone
        email
        services
    }
  }
`;

const SET_CONTRACTOR_DETAILS = gql`
  mutation UpdateContractor($name: String!, $telephone: String!, $email: String!, $services: [String!]!) {
    updateContractor(name: $name, telephone: $telephone, email: $email, services: $services) {
      name
      telephone
      email
      services
    }
  }
`;

function ContractorApp() {
  const { loading, error, data } = useQuery(GET_CONTRACTOR_DETAILS);

  const updateCache = (cache, { data: { updateContractor } }) => {
    const existingContractors = cache.readQuery({
      query: GET_CONTRACTOR_DETAILS,
    });
    cache.writeQuery({
      query: GET_CONTRACTOR_DETAILS,
      data: { contractors: updateContractor },
    });
  };

  const [updateContractor] = useMutation(SET_CONTRACTOR_DETAILS,
    { update: updateCache ,
      onCompleted: (data) => {
      setOpen(true);
    }
  });

  //State for alert
  const [ open, setOpen ] = useState(false);

  const classes = useStyles();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid container className={classes.root} justify="center">
      <Grid item xs={8} >
        <h1>Contractor App</h1>
        <SuccessAlert open={open} setOpen={setOpen} />
      </Grid>
      <Grid item xs={8} >
        <Paper className={classes.control} variant="outlined">
          <InputForm updateContractor={updateContractor} />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.control} variant="outlined">
          <AvailableContractors data={data} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContractorApp;