import styles from './SearchMovie.module.scss'

import { IMovieInfo } from 'types/SearchMovie.d'

interface Props {
  item: IMovieInfo
}

const MovieItem = ({ item }: Props) => {
  return (
    <li key={item.imdbID}>
      <dl>
        <div>
          <dt>포스터</dt>
          <dd>
            <img src={item.Poster} />
          </dd>
        </div>
        <div className={styles.moviInfo}>
          <dt>타이틀</dt>
          <dd>{item.Title}</dd>
          <dt>타입</dt>
          <dd>{item.Type}</dd>
          <dt>연도</dt>
          <dd>{item.Year}</dd>
        </div>
      </dl>
    </li>
  )
}

export default MovieItem
