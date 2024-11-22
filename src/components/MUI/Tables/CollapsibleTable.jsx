'use client'

import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Avatar } from '@mui/material';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

                <TableCell component="th" scope="row">
                    <span className='flex items-center gap-2'>
                        <Avatar sx={{ width: 24, height: 24 }} />
                        {row.name}
                    </span>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right">{row.floor}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Shift</TableCell>
                                        <TableCell>
                                            {row?.details?.shift}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Experience</TableCell>
                                        <TableCell>
                                            {row?.details?.experience}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Contact</TableCell>
                                        <TableCell>
                                            {row?.details?.contact}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Email</TableCell>
                                        <TableCell>
                                            {row?.details?.email}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Hire Date</TableCell>
                                        <TableCell>
                                            {row?.details?.hireDate}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

const rows = [
    {
        id: 1,
        name: 'Hasnat Alam',
        age: 28,
        gender: 'male',
        department: 'cleaning',
        floor: 1,
        details: {
            shift: 'morning',
            experience: '3 years',
            contact: '+8801234567890',
            email: 'hasnat.alam@hotel.com',
            hireDate: '2021-06-15',
        },
    },
    {
        id: 2,
        name: 'Rafiqul Islam',
        age: 35,
        gender: 'male',
        department: 'cleaning',
        floor: 2,
        details: {
            shift: 'night',
            experience: '5 years',
            contact: '+8801234567891',
            email: 'rafiqul.islam@hotel.com',
            hireDate: '2019-03-10',
        },
    },
    {
        id: 3,
        name: 'Sumaiya Akter',
        age: 26,
        gender: 'female',
        department: 'reception',
        floor: 'lobby',
        details: {
            shift: 'morning',
            experience: '2 years',
            languages: ['English', 'Bengali'],
            contact: '+8801234567892',
            email: 'sumaiya.akter@hotel.com',
            hireDate: '2022-04-01',
        },
    },
    {
        id: 4,
        name: 'Tahmina Khatun',
        age: 32,
        gender: 'female',
        department: 'reception',
        floor: 'lobby',
        details: {
            shift: 'evening',
            experience: '4 years',
            languages: ['English', 'Hindi'],
            contact: '+8801234567893',
            email: 'tahmina.khatun@hotel.com',
            hireDate: '2020-01-15',
        },
    },
    {
        id: 5,
        name: 'Arif Hossain',
        age: 29,
        gender: 'male',
        department: 'security',
        floor: 'entrance',
        details: {
            shift: 'night',
            experience: '3 years',
            certifications: ['First Aid'],
            contact: '+8801234567894',
            email: 'arif.hossain@hotel.com',
            hireDate: '2021-11-20',
        },
    },
    {
        id: 6,
        name: 'Mehdi Hasan',
        age: 40,
        gender: 'male',
        department: 'security',
        floor: 'entrance',
        details: {
            shift: 'day',
            experience: '8 years',
            certifications: ['Fire Safety', 'First Aid'],
            contact: '+8801234567895',
            email: 'mehdi.hasan@hotel.com',
            hireDate: '2015-09-30',
        },
    },
    {
        id: 7,
        name: 'Sajeda Rahman',
        age: 23,
        gender: 'female',
        department: 'housekeeping',
        floor: 3,
        details: {
            shift: 'morning',
            experience: '1 year',
            contact: '+8801234567896',
            email: 'sajeda.rahman@hotel.com',
            hireDate: '2023-01-10',
        },
    },
    {
        id: 8,
        name: 'Maruf Ahmed',
        age: 31,
        gender: 'male',
        department: 'housekeeping',
        floor: 4,
        details: {
            shift: 'night',
            experience: '6 years',
            contact: '+8801234567897',
            email: 'maruf.ahmed@hotel.com',
            hireDate: '2018-07-05',
        },
    },
    {
        id: 9,
        name: 'Mithila Karim',
        age: 27,
        gender: 'female',
        department: 'kitchen',
        floor: 'basement',
        details: {
            role: 'chef',
            specialty: 'continental dishes',
            experience: '5 years',
            contact: '+8801234567898',
            email: 'mithila.karim@hotel.com',
            hireDate: '2019-08-15',
        },
    },
    {
        id: 10,
        name: 'Nayeem Uddin',
        age: 34,
        gender: 'male',
        department: 'kitchen',
        floor: 'basement',
        details: {
            role: 'chef',
            specialty: 'local cuisine',
            experience: '7 years',
            contact: '+8801234567899',
            email: 'nayeem.uddin@hotel.com',
            hireDate: '2017-05-20',
        },
    },
    {
        id: 11,
        name: 'Shafiqur Rahman',
        age: 42,
        gender: 'male',
        department: 'management',
        floor: 'top',
        details: {
            role: 'manager',
            experience: '15 years',
            contact: '+8801234567800',
            email: 'shafiqur.rahman@hotel.com',
            hireDate: '2008-02-01',
        },
    },
    {
        id: 12,
        name: 'Nusrat Jahan',
        age: 30,
        gender: 'female',
        department: 'management',
        floor: 'top',
        details: {
            role: 'assistant manager',
            experience: '8 years',
            contact: '+8801234567801',
            email: 'nusrat.jahan@hotel.com',
            hireDate: '2016-12-10',
        },
    },
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell>Employee</TableCell>
                        <TableCell>Employee Id</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Department</TableCell>
                        <TableCell align="right">Floor</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
