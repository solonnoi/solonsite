import NavBar from '@/components/NavBar';
import Particle from '@/components/particles';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Particle />
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}
