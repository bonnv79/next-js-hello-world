import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.scss'
import styles from '../styles/app.module.scss'
import { getCookie, setCookie } from 'utils/cookies';
import { Button } from 'components';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTER_PATH } from 'constants/routerPath';

function MyApp({ Component, pageProps }) {
  const [userName, setUserName] = useState('');
  const router = useRouter()
  const { pathname } = router;
  const isLogin = pathname.includes('login')

  useEffect(() => {
    const userNameCookie = getCookie('userName');
    if (!userNameCookie) {
      router.push(ROUTER_PATH.LOGIN)
    } else {
      setUserName(userNameCookie)
    }
  }, []);

  if (!userName && !isLogin) {
    return (
      <center className='loading-label'>loading...</center>
    );
  }

  const handleLogout = () => {
    setCookie('userName', '')
    router.push(ROUTER_PATH.LOGIN)
  }

  const handleSignUp = () => {
    alert('The feature is under development')
  }

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link href={ROUTER_PATH.HOME}>
            <span className={styles.logo}>NextJS</span>
          </Link>
        </div>
        <div className={styles.right}>
          {!isLogin && (
            <>
              <Image src="/user.png" alt="User Logo" width={24} height={24} />
              <span className={styles.user}>{userName}</span>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          )}

          {isLogin && <Button onClick={handleSignUp}>Sign up</Button>}
        </div>
      </div>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

