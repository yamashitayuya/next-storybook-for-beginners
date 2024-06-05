import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Preview } from '@storybook/react';
import { Provider } from 'jotai';
import React from 'react';
import { setErrorMap } from 'zod';

import '../app/globals.css';
import { theme } from '../components/containers/root/theme';
import customErrorMap from '../lib/validations';

setErrorMap(customErrorMap);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <AppRouterCacheProvider options={{ key: 'css' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <Provider>
              <Story />
            </Provider>
          </StyledEngineProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    ),
  ],
};

export default preview;
