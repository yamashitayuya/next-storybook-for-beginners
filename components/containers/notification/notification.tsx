'use client';

import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ExtractAtomValue, useAtomValue } from 'jotai';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { memo, useEffect, useRef } from 'react';

import { notificationState, useRemoveNotification } from 'lib/notification';

/**
 * Renders a notification component that displays a list of items.
 */
export default function Notification() {
  const state = useAtomValue(notificationState);
  return (
    <SnackbarProvider maxSnack={5}>
      {state.map((notification) => (
        <MemoizedNotifier key={notification.id} {...notification} />
      ))}
    </SnackbarProvider>
  );
}
const MemoizedNotifier = memo(Notifier);
function Notifier({ id, variant, message, disableClose }: ExtractAtomValue<typeof notificationState>[number]) {
  const removeNotification = useRemoveNotification();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // Prevent duplicate notifications
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) return;
    ref.current = true;
    const key = enqueueSnackbar(message, {
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      variant,
      autoHideDuration: 5000,
      onClose: () => removeNotification(id),
      action: disableClose
        ? undefined
        : () => (
            <IconButton aria-label="close" color="inherit" className="p-1" onClick={() => closeSnackbar(key)}>
              <Close />
            </IconButton>
          ),
    });
  }, [closeSnackbar, disableClose, enqueueSnackbar, id, message, removeNotification, variant]);
  return null;
}
