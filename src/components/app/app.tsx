import { AppFooter } from "../app-footer/app-footer";
import { AppHeader } from "../app-header/app-header"
import { DiscountBanner } from "../discount-banner/discount-banner";
import { Newsletter } from "../newsletter/newsletter";
import styles from './app.module.scss'

const App = () => {
  
  return (
    <>
    <DiscountBanner/>
    <div className={styles.app}>
      <AppHeader/>
      <div style={{height: '20vh'}}></div>
      <Newsletter/>
      <AppFooter/>
    </div>
    </>
  )
}

export default App