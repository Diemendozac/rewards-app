
// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { AuthProvider } from '../app/Context/context';
import '../styles/globals.css';

const Home = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default Home;
