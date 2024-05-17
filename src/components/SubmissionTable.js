import React from 'react';
import { getSubmissions } from '../utils/storage';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SubmissionTable = () => {
  const submissions = getSubmissions();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Service</TableCell>
            <TableCell>Beverage</TableCell>
            <TableCell>Cleanliness</TableCell>
            <TableCell>Experience</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((submission, index) => (
            <TableRow key={index}>
              <TableCell>{submission.name}</TableCell>
              <TableCell>{submission.email}</TableCell>
              <TableCell>{submission.phone}</TableCell>
              <TableCell>{submission.service}</TableCell>
              <TableCell>{submission.beverage}</TableCell>
              <TableCell>{submission.cleanliness}</TableCell>
              <TableCell>{submission.experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SubmissionTable;
