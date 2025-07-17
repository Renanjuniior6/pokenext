import styles from '../styles/Loading.module.css'

export default function Loading() {
  // Add fallback UI that will be shown while the route is loading.
  return <p className={styles.loading}>Carregando...</p>
}