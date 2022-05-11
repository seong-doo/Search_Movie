import styles from './Routes.module.scss'
import SearchMovie from './SearchMovie'

const App = () => {
  return (
    <div className={styles.app}>
      <SearchMovie />
    </div>
  )
}

export default App
