import { Box, Container, Toolbar } from '@mui/material';

import Drawer from './drawer';
import Header from './header';

export default function Root({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box className="flex">
      <Header />
      <Drawer />
      <Box component="main" className="h-screen flex-grow overflow-auto bg-gray-100">
        <Toolbar />
        <Container maxWidth={false} className="my-8">
          {children}
        </Container>
      </Box>
    </Box>
  );
}
