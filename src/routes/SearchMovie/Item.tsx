import styles from './SearchMovie.module.scss'
import { IMovieInfo } from 'types/SearchMovie.d'

interface Props {
  item: IMovieInfo
}

const MovieItem = ({ item }: Props) => {
  const { Poster, Title, Type, Year, imdbID } = item

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.currentTarget.style.transform = `translateX(-260px)`
  }

  const addFavorites: React.MouseEventHandler<HTMLButtonElement> = () => {
    // setFavoriteData()
    localStorage.setItem(`favoriteMovie`, JSON.stringify({ Poster, Title, Type, Year, imdbID }))
  }

  return (
    <li key={item.imdbID}>
      <div role='presentation' className={styles.itemCard} onClick={handleMouseMove}>
        <dl>
          <div>
            <dt>포스터</dt>
            <dd>
              <img src={Poster} alt='poster' />
            </dd>
          </div>
          <div className={styles.moviInfo}>
            <dt>타이틀</dt>
            <dd>{Title}</dd>
            <dt>타입</dt>
            <dd>{Type}</dd>
            <dt>연도</dt>
            <dd>{Year}</dd>
          </div>
        </dl>

        <div className={styles.addFavorites}>
          <p className={styles.deleteText}>Add Favorites List This Movie?</p>
          <button type='button' className={styles.favoriteBtn} onClick={addFavorites}>
            Add!
          </button>
          <button type='button' className={styles.favoriteBtn}>
            UNDO
          </button>
        </div>
      </div>
    </li>
  )
}

export default MovieItem
