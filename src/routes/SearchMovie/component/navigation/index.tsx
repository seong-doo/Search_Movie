import styles from './navigation.module.scss'

import { useNavigate } from 'react-router-dom'

import { HomeIcon, StarIcon } from 'assets/svgs'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <button type='button' onClick={() => navigate('/')}>
            <HomeIcon />
          </button>
        </li>
        <li>
          <button type='button' onClick={() => navigate('/favorites')}>
            <StarIcon />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
