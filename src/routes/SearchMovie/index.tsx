// import dayjs from 'dayjs'
import styles from './SearchMovie.module.scss'

import { useEffect, useState } from 'hooks'
import { getMovieApi } from 'services/SearchMovie'
import { IMovieAPIRes } from 'types/SearchMovie.d'

import MovieItem from 'routes/SearchMovie/Item'
import Pagination from './component/pagination/index'
import SearchBar from './component/searchBar'
import NavBar from './component/navigation'
import { axios } from 'utils/axios'

const SearchMovie = () => {
  const [data, setData] = useState<IMovieAPIRes>()
  const [pageNum, setPageNum] = useState(0)
  const [movieTitle, setMovieTitle] = useState('')

  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'

  axios
    .get(
      `/B551182/diseaseInfoService/getDissNameCodeList${PROXY}?ServiceKey=JDxWm/ZI8QYLW3HekZ2yqKFqcHedPCx1tS/Dyf9wDzQhzm9KS6t3Sb61Hx2/MAMuLmkOtktLdV5Mn4k4sKHVNA==&searchText=암`
    )
    .then((res) => {
      // eslint-disable-next-line
      console.log(res)
    })

  useEffect(() => {
    getMovieApi({
      apikey: '67e64d0b',
      s: movieTitle,
      page: pageNum + 1,
    }).then((res) => {
      setData(res.data)
    })
  }, [movieTitle, pageNum])

  if (!data) return null

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPageNum(selected)
  }

  return (
    <section className={styles.searchMovieApp}>
      <h1>Movie Search</h1>
      <SearchBar setMovieTitle={setMovieTitle} setPageNum={setPageNum} />
      <h2>Search Result</h2>
      {JSON.parse(data.Response.toLowerCase()) ? (
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
      ) : (
        <div className={styles.noResult}>검색결과가 없습니다..</div>
      )}
      <NavBar />
    </section>
  )
}

export default SearchMovie
