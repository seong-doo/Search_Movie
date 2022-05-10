// import dayjs from 'dayjs'
import styles from './SearchMovie.module.scss'

import { useMount, useState } from 'hooks'
import { getMovieApi } from 'services/SearchMovie'
import { IMovieAPIRes } from 'types/SearchMovie.d'
import MovieItem from 'routes/SearchMovie/Item'

const Weather = () => {
  const [data, setData] = useState<IMovieAPIRes>()

  useMount(() => {
    getMovieApi({
      s: 'iron man', // 검색 필터로 거른뒤 useState를 이용해 관리
      page: 2, // 마찬가지로 useState를 이용해 관리
    }).then((res) => {
      setData(res.data)
      console.log(res.data.Search)
    })
  })

  return (
    <section className={styles.searchMovieApp}>
      <h1>Movie</h1>
      <h2>Search Result</h2>
      <div className={styles.searchResult}>
        <ul>
          {data?.Search.map((item) => {
            return <MovieItem key={item.imdbID} item={item} />
          })}
        </ul>
      </div>
    </section>
  )
}

export default Weather
