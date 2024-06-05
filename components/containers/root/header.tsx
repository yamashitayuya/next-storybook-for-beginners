'use client';

import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { useCallback, useState } from 'react';

import { logoutAction } from 'lib/actions/auth';

import { drawer, useToggle } from './data';

export default function Header() {
  const open = useAtomValue(drawer);
  const toggle = useToggle();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClose = useCallback(() => setAnchorEl(null), [setAnchorEl]);
  return (
    <AppBar
      position="absolute"
      className={clsx({ 'w-[calc(100%-240px)]': open })}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: (theme) =>
          theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: open ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggle}
          className={clsx('mr-9', { hidden: open })}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className="flex-grow">
          Header
        </Typography>
        <Button
          id="basic-button"
          aria-controls={anchorEl ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? 'true' : undefined}
          onClick={(event) => setAnchorEl(event.currentTarget)}
          variant="text"
          color="inherit"
        >
          アカウント設定
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        >
          <MenuItem onClick={async () => await logoutAction()}>ログアウト</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
