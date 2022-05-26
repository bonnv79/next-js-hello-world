import { ROUTER_PATH } from 'constants/routerPath';
import Link from 'next/link';
import styles from './styles.module.scss';

export function PostCard(props) {
  const { id, title, children = 'Click to view page details' } = props;
  return (
    <Link href={{
      pathname: ROUTER_PATH.DETAIL_POST,
      query: { id },
    }}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </Link>
  )
}

export default PostCard
