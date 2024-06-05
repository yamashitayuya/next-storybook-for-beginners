'use client';

import { Dashboard, People } from '@mui/icons-material';
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
      <ListItemButton component={NextLink} href="/" selected={pathname === '/'}>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Top" />
      </ListItemButton>
      <ListItemButton component={NextLink} href="/hello" selected={pathname === '/hello'}>
        <ListItemIcon>
          <People />
        </ListItemIcon>
        <ListItemText primary="Hello" />
      </ListItemButton>
    </List>
  );
}
