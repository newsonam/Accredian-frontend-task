import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SchoolIcon from '@mui/icons-material/School';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#87CEFA',
        color: '#1976d2',
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(program,referrerbonus ,refereebonus) {
    return { program,referrerbonus ,refereebonus };
}

const rows = [
    createData('Professional Certificate Program in Product Management', 7000, 9000),
    createData('PG Certificate Program in Strategic Product Management', 9000, 11000),
    createData('Executive Program in Data Driven Product Management', 10000, 10000),
    createData('Executive  Program in Product Management and digital Transformation', 10000, 10000),
    createData('Executive Program in Product Management', 10000, 10000),
    createData('Advanced Certification in Product Management', 10000, 10000),
    createData('Executive Program in Product Management and project Management', 10000, 10000),

];

export default function ProgramTable() {
    return (
        <TableContainer component={Paper} sx={{marginLeft:'2', boxShadow: '0px 0px 20px #aaaaaa'}}>
            <Table sx={{ width: 750 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Programs</StyledTableCell>
                        <StyledTableCell align="right">Referrer Bonus</StyledTableCell>
                        <StyledTableCell align="right">Referee Bonus</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.program}>
                            <StyledTableCell component="th" scope="row">
                            <SchoolIcon style={{color:'#1976d2'}}/> {row.program}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.referrerbonus}</StyledTableCell>
                            <StyledTableCell align="right">{row.refereebonus}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
