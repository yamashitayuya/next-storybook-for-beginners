'use client';

import { jaJP } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { setErrorMap } from 'zod';

import customErrorMap from 'lib/validations';

setErrorMap(customErrorMap);

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme(
  {
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  },
  jaJP,
);
