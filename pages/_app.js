import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.css'
import { getCookie } from './utils';

function MyApp({ Component, pageProps }) {
  const [userName, setUserName] = useState('');
  const router = useRouter()
  const { pathname } = router;
  const isLogin = pathname.includes('login')

  useEffect(() => {
    const userNameCookie = getCookie('userName');
    if (!userNameCookie) {
      router.push('/login')
    } else {
      setUserName(userNameCookie)
    }
  }, []);

  if (!userName && !isLogin) {
    return (
      <center className='loading-label'>loading...</center>
    );
  }

  return <Component {...pageProps} userName={userName} />
}

export default MyApp

