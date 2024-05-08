import { atom, useSetAtom } from "jotai";
import { useCallback } from "react";

/**
 * Drawer open state
 */
export const drawer = atom(true);
/**
 * Custom hook that provides a toggle open drawer.
 */
export function useToggle() {
  const set = useSetAtom(drawer);
  return useCallback(() => set((prev) => !prev), [set]);
}
