import { AddButton } from './components/addButton/addButton';
import { SearchButton } from './components/searchButton/searchButton';
import styles from './nav.module.scss';

function NavBar() {
  return (  
    <nav className={styles.nav}>
      <h2>ENERBIT</h2>
      <div className={styles.navButtons}>
        <AddButton/>
        <SearchButton/>
      </div>
    </nav>
  );
}

export {NavBar};