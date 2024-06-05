import { useSetAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';

import { MODAL_BODY_VARIANT } from './constants';
import { ExtractModalExtraState, ModalState } from './types';

export const modalState = atomWithReset<ModalState>({
  size: '',
  title: '',
  type: MODAL_BODY_VARIANT.CLOSE,
  extra: {},
});

/**
 * 閉じる
 */
export function useCloseModal() {
  return useResetAtom(modalState);
}

/**
 * 確認モーダル
 */
export function useConfirmModal(title = '確認') {
  const setAtom = useSetAtom(modalState);
  return (extra: ExtractModalExtraState<typeof MODAL_BODY_VARIANT.CONFIRM>) =>
    setAtom({
      size: '',
      title,
      type: MODAL_BODY_VARIANT.CONFIRM,
      extra: {
        confirmText: '確認',
        cancelText: 'キャンセル',
        ...extra,
      },
    });
}
