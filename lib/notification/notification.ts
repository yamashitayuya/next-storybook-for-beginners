import { atom, useSetAtom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';

import { NOTIFICATION_VARIANT } from './constants';
import { NotificationState } from './types';

/**
 * Represents the state of notifications.
 */
export const notificationState = atom<NotificationState>([]);

/**
 * 通知の追加
 */
export function useAddNotification() {
  const setAtom = useSetAtom(notificationState);
  return (
    notification: Partial<Pick<NotificationState[number], 'id' | 'variant'>> &
      Omit<NotificationState[number], 'id' | 'variant'>,
  ) => {
    setAtom((prev) => [
      ...prev,
      {
        ...notification,
        id: notification.id || uuidv4(),
        variant: notification.variant || NOTIFICATION_VARIANT.DEFAULT,
      },
    ]);
  };
}

/**
 * 通知の削除
 */
export function useRemoveNotification() {
  const setAtom = useSetAtom(notificationState);
  return (id: string) => {
    setAtom((prev) => prev.filter((item) => item.id !== id));
  };
}
