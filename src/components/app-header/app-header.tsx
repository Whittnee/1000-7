import { FaSearch } from 'react-icons/fa'
import styles from './app-header.module.scss'
import { Link } from 'react-router'

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <div>
          <Link className={styles.link} to='/'><span className={styles.logo}>1000-7</span></Link>
        </div>
        <div>
        <Link className={styles.link} to='/'>On Sale</Link>
        </div>
        <div className={styles.inputWrapper}>
          <FaSearch style={{color: 'black'}}/>
          <input type='text' className='' placeholder='Type to search...'/>
        </div>
        <div>
          <Link className={styles.link} to='/'>Sign In</Link>
        </div>
      </nav>
    </header>
  )
}