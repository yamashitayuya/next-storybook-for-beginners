'use client';

import { useCallback, useState } from 'react';

import { useCloseModal, useConfirmModal } from 'lib/modal';
import { useAddNotification } from 'lib/notification';

import HelloComponent from './hello';

export default function Hello() {
  const [message, setMessage] = useState<string>('');
  /**
   * The confirmModal is a hook that provides functionality for displaying a confirmation modal.
   */
  const confirmModal = useConfirmModal();
  /**
   * The closeModal is a hook that provides functionality for closing a modal.
   */
  const closeModal = useCloseModal();

  /**
   * The addNotification is a hook that provides functionality for adding a notification.
   */
  const addNotification = useAddNotification();

  /**
   * 送信処理
   */
  const onSubmit = useCallback(
    (message: string) => {
      confirmModal({
        message: `${message}を送信しますか？`,
        onConfirm: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setMessage(`Hello ${message}`);
          closeModal();
          addNotification({ message: '送信しました', variant: 'success' });
        },
        onCancel: closeModal,
        confirmText: '送信',
      });
    },
    [addNotification, closeModal, confirmModal],
  );

  return <HelloComponent message={message} onSubmit={onSubmit} />;
}
