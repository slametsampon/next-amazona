import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazona </Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>Made by sam</Typography>
      </footer>
    </div>
  );
}
