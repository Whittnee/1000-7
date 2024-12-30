import { MdOutlineEmail } from 'react-icons/md'
import styles from './newsletter.module.scss'

export const Newsletter = () => {
  return (
    <article className={styles.article}>
      <div className={styles.contentWrapper}>
      <h3 className={styles.text}>stay upto date about <br/> our latest offers</h3>
      <form className={styles.form}>
        <label htmlFor="emailInput" style={{display: 'none'}}>Email</label>
        <div className={styles.inputWrapper}>
          <MdOutlineEmail className={styles.emailIcon}/>
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email address"
          />
        </div>
        <button className={styles.button} type="submit">Subscribe</button>
      </form>
    </div>
    </article>
  )
}