'use client';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useAtom } from 'jotai';

import { MODAL_BODY_VARIANT, modalState, useCloseModal } from '../../../lib/modal';
import Confirm from './confirm';

export default function Modal() {
  const [state] = useAtom(modalState);

  const close = useCloseModal();

  return (
    <Dialog
      open={state.type !== MODAL_BODY_VARIANT.CLOSE}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{state.title}</DialogTitle>
      {state.type === MODAL_BODY_VARIANT.CONFIRM && <Confirm {...{ ...state.extra }} />}
    </Dialog>
  );
}
