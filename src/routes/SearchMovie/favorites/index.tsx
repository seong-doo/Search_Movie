// import dayjs from 'dayjs'
import styles from './favorites.module.scss'

import MovieItem from 'routes/SearchMovie/Item'
import NavBar from '../component/navigation/index'

const Favorites = () => {
  return (
    <section className={styles.searchMovieApp}>
      <h1>Favorites</h1>
      <div className={styles.favoritesList}>sad</div>
      <NavBar />
    </section>
  )
}

export default Favorites
