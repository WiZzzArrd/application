import styles from "./navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <a href='#'>Profile</a>
        </li>
        <li>
          <a href='#'>Messages</a>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Music</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
