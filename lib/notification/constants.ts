import { VariantType } from 'notistack';

/**
 * Defines the available notification variants.
 */
export const NOTIFICATION_VARIANT: Record<Uppercase<VariantType>, VariantType> = {
  DEFAULT: 'default',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;
