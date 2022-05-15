// import dayjs from 'dayjs'
import styles from './favorites.module.scss'

import MovieItem from 'routes/SearchMovie/Item'
import NavBar from '../component/navigation/index'
import { IMovieInfo } from 'types/SearchMovie.d'

const Favorites = () => {
  return (
    <section className={styles.searchMovieApp}>
      <h1>My Favorites</h1>
      <div className={styles.favoritesList}>
        {/* {JSON.parse(localStorage.getItem('favoriteMovie')) !== null ? (
          <ul className={styles.itemUl}>
            {JSON.parse(localStorage.getItem('favoriteMovie')).map((item: IMovieInfo) => (
              <MovieItem key={`favorites-${item.imdbID}`} item={item} />
            ))}
          </ul>
        ) : (
          <div className={styles.noResult}>검색결과가 없습니다..</div>
        )} */}
      </div>
      <NavBar />
    </section>
  )
}

export default Favorites
