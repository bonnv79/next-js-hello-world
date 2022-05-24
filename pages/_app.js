import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css'
import { getCookie } from './utils';

const enabledLogin = false;

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const user = getCookie('user')
  const loading = false;

  useEffect(() => {
    if (!(user || loading) && enabledLogin) {
      router.push('/login')
    }
  }, [user, loading]);

  return <Component {...pageProps} />
}

export default MyApp

