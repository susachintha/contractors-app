import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const initialValues = {
  name: "",
  telephone: "",
  email: "",
  services: "",
};

export default function InputForm({ updateContractor }) {
  const classes = useStyles();

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (!value) {
      value = "";
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    updateContractor({
      variables: {
        name: values.name,
        email: values.email,
        telephone: values.telephone,
        services: values.services.split(','),
      },
    });

    setValues(initialValues);
    event.preventDefault();
  };

  let buttonDisabled = true;
  if (values.email.trim() !== "" && values.name.trim() !== "" && values.telephone.trim() !== "" && values.services.trim() !== "") {
    buttonDisabled = false;
  }

  return (
    <div className={classes.root}>
      <h2>Contractor Input Form</h2>
      <Grid container>
        <Grid item xs={12}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField required label="Required" value={values.name} onChange={handleInputChange} name="name" label="Name" />
            <TextField required value={values.telephone} onChange={handleInputChange} name="telephone" label="Telephone" />
            <TextField required value={values.email} onChange={handleInputChange} name="email" label="Email" />
            <TextField required value={values.services} onChange={handleInputChange} name="services" label="Services (comma separated)" />
            <div>
              <Button variant="contained" color="primary" type="submit" disabled={buttonDisabled}>Add Contractor</Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}