// import dayjs from 'dayjs'
import styles from './SearchMovie.module.scss'

import { useEffect, useState } from 'hooks'
import { getMovieApi } from 'services/SearchMovie'
import { IMovieAPIRes } from 'types/SearchMovie.d'
import MovieItem from 'routes/SearchMovie/Item'
import Pagination from './component/index'

const Weather = () => {
  const [data, setData] = useState<IMovieAPIRes>()
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    getMovieApi({
      s: 'iron man',
      page: pageNum + 1,
    }).then((res) => {
      setData(res.data)
    })
  }, [pageNum])

  if (!data) return null

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPageNum(selected)
  }

  return (
    <section className={styles.searchMovieApp}>
      <h1>Movie</h1>
      <h2>Search Result</h2>
      <div className={styles.searchResult}>
        <ul className={styles.itemUl}>
          {data.Search.map((item) => (
            <MovieItem key={item.imdbID} item={item} />
          ))}
        </ul>
        <Pagination
          initialPage={pageNum}
          marginPagesDisplayed={0}
          pageCount={data.Search.length}
          pageRangeDisplayed={3}
          handlePageChange={handlePageChange}
        />
      </div>
    </section>
  )
}

export default Weather
