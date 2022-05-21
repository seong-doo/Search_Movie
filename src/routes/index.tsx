import styles from './Routes.module.scss'

import { Route, Routes } from 'react-router-dom'

import SearchMovie from './SearchMovie'
import Favorites from './SearchMovie/favorites/index'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<SearchMovie />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
