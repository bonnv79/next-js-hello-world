import Link from 'next/link';
import styles from './styles.module.scss'

export function Card(props) {
  const { href, title, children = 'Click to view page details' } = props;
  return (
    <Link href={href}>
      <a className={styles.card}>
        <h2>{title}</h2>
        <p>{children}</p>
      </a>
    </Link>
  )
}

export default Card
