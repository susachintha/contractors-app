import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Contractor = ({ contractor }) => {
    return (
        <TableRow key={contractor.name}>
            <TableCell component="th" scope="row">
                {contractor.name}
            </TableCell>
            <TableCell>{contractor.telephone}</TableCell>
            <TableCell>{contractor.email}</TableCell>
            <TableCell>{contractor.services.join()}</TableCell>
        </TableRow>
    );
}

export default Contractor;