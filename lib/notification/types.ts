import { NOTIFICATION_VARIANT } from './constants';

interface Notification {
  /**
   * 通知ID
   */
  id: string;
  /**
   * メッセージ
   */
  message: string;
  /**
   * 閉じるボタンを表示しない
   * @default false
   */
  disableClose?: boolean;
  /**
   * 通知タイプ
   */
  variant: (typeof NOTIFICATION_VARIANT)[keyof typeof NOTIFICATION_VARIANT];
}

export type NotificationState = Notification[];
