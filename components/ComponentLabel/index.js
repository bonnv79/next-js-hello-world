import styles from './styles.module.css'

export function ComponentLabel({ label, children }) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <div className={styles.children}>{children}</div>
    </div>
  )
}