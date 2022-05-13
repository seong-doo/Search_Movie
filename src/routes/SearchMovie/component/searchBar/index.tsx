import styles from './searchBar.module.scss'

import { useState } from 'react'

import { SearchIcon } from 'assets/svgs'

interface IProps {
  setMovieTitle: React.Dispatch<React.SetStateAction<string>>
  setPageNum: React.Dispatch<React.SetStateAction<number>>
}

const SearchBar = ({ setMovieTitle, setPageNum }: IProps) => {
  const [inputTitle, setInputTitle] = useState('')

  const handleSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.currentTarget.value)
  }
  const handleSearchBtn = () => {
    setMovieTitle(inputTitle)
    setPageNum(0)
  }
  return (
    <div className={styles.searchBarWrapper}>
      <input type='text' placeholder='Please enter the movie title' value={inputTitle} onChange={handleSearchTitle} />
      <button type='submit' onClick={handleSearchBtn}>
        <SearchIcon />
      </button>
    </div>
  )
}

export default SearchBar
