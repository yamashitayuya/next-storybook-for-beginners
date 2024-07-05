'use client';

import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Link from '@mui/material/Link';

import './order.css';
import { OrderData } from './types';

export default function Order({ data }: Readonly<OrderData>) {
  return (
    <Paper className="p-4">
      {/* Title */}
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Orders
      </Typography>
      <Table sx={{ marginBottom: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: '6px' }} className="px-4">
              Date
            </TableCell>
            <TableCell sx={{ padding: '6px' }} className="px-4">
              Name
            </TableCell>
            <TableCell sx={{ padding: '6px' }} className="px-4">
              Ship To
            </TableCell>
            <TableCell sx={{ padding: '6px' }} className="px-4">
              Payment Method
            </TableCell>
            <TableCell sx={{ padding: '6px', textAlign: 'right' }} className="px-4">
              Sale Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} sx={{ borderBottom: '1px solid #ddd' }} className="p-2">
              <TableCell sx={{ padding: '6px', marginRight: 'auto' }} className="px-4">
                {item.date}
              </TableCell>
              <TableCell sx={{ padding: '6px' }} className="px-4">
                {item.name}
              </TableCell>
              <TableCell sx={{ padding: '6px' }} className="px-4">
                {item.shipTo}
              </TableCell>
              <TableCell sx={{ padding: '6px' }} className="px-4">
                {item.paymentMethod}
              </TableCell>
              <TableCell sx={{ padding: '6px', marginLeft: 'auto', textAlign: 'right' }} className="px-4">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#">
        See more orders
      </Link>
    </Paper>
  );
}
