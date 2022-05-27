import styles from './styles.module.scss'

export function ComponentLabel({ label, children, className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <span className={styles.label}>{label}</span>
      <div className={styles.children}>{children}</div>
    </div>
  )
}

export default ComponentLabel