'use client';

import { BarChart, Dashboard, Layers, People, ShoppingCart } from '@mui/icons-material';
import { List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <List component="nav">
      <ListItemButton component={NextLink} href="/dashboard" selected={pathname === '/dashboard'}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/hello" selected={pathname === '/hello'}>
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <BarChart />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <Layers />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </List>
  );
}
