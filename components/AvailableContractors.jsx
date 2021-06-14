import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

import { v4 as uuidv4 } from 'uuid';

import Contractor from './Contractor'

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
        table: {
            borderTopWidth: 1,
            borderColor: 'red',
            borderStyle: 'solid'
        },
    },
}));

export default function AvailableContractors({ data }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>Available Contractors</h2>
            <Grid container>
                <Grid item xs={12}>
                    <Table aria-label="simple table" className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Telephone</TableCell>
                                <TableCell>Email&nbsp;Address</TableCell>
                                <TableCell>Services</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.contractors.map((contractor) => (
                                <Contractor key={uuidv4()}  contractor={contractor} />
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </div>
    );
}