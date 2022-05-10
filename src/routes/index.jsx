import styles from './Routes.module.scss'
import Weather from './SearchMovie'

const App = () => {
  return (
    <div className={styles.app}>
      <Weather />
    </div>
  )
}

export default App
