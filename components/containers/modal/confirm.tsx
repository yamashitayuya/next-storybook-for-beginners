import { Button, DialogActions, DialogContent, DialogContentText } from '@mui/material';

import { ExtractModalExtraState, MODAL_BODY_VARIANT } from 'lib/modal';

export default function Confirm({
  message,
  onConfirm,
  onCancel,
  confirmText = '確認',
  cancelText = 'キャンセル',
}: ExtractModalExtraState<typeof MODAL_BODY_VARIANT.CONFIRM>) {
  return (
    <>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button onClick={onConfirm} autoFocus>
          {confirmText}
        </Button>
      </DialogActions>
    </>
  );
}
