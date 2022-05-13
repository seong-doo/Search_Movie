import styles from './searchMovie.module.scss'

import { IMovieInfo } from 'types/SearchMovie.d'

interface Props {
  item: IMovieInfo
}

const MovieItem = ({ item }: Props) => {
  const { Poster, Title, Type, Year } = item

  return (
    <li key={item.imdbID}>
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
    </li>
  )
}

export default MovieItem
