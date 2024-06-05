import { MODAL_BODY_VARIANT } from './constants';

interface ModalStateBase<
  Type extends
    (typeof MODAL_BODY_VARIANT)[keyof typeof MODAL_BODY_VARIANT] = (typeof MODAL_BODY_VARIANT)[keyof typeof MODAL_BODY_VARIANT],
  Extra = unknown,
> {
  /**
   * モーダルの種類
   */
  type: Type;
  /**
   * モーダルのサイズ
   */
  size: '' | 'lg';
  /**
   * モーダルのタイトル
   */
  title: string;
  /**
   * モーダルの追加情報
   */
  extra: Extra;
}

/**
 * 全モーダル
 */
export type ModalState = CloseModalState | ConfirmModalState;
/**
 * モーダルの特定
 */
export type ExtractModalExtraState<Type extends ModalState['type']> = Extract<ModalState, { type: Type }>['extra'];

/**
 * 閉じる
 */
type CloseModalState = ModalStateBase<typeof MODAL_BODY_VARIANT.CLOSE>;

/**
 * 確認
 */
type ConfirmModalState = ModalStateBase<
  typeof MODAL_BODY_VARIANT.CONFIRM,
  {
    /**
     * メッセージ
     */
    message: string;
    /**
     * 確認時の処理
     */
    onConfirm: () => void;
    /**
     * キャンセル時の処理
     */
    onCancel: () => void;
    /**
     * 確認ボタンのテキスト
     * @default 確認
     */
    confirmText?: string;
    /**
     * キャンセルボタンのテキスト
     * @default キャンセル
     */
    cancelText?: string;
  }
>;
