import styles from "./navbar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <a href='/'>Главная</a>
        </li>
        <li>
          <a href='#'>Профиль</a>
        </li>
        <li>
          <a href='#'>Сообщения</a>
        </li>
        <li>
          <a href='#'>Новости</a>
        </li>
        <li>
          <a href='#'>Музыка</a>
        </li>
        <li>
          <a href='#'>Настройки</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
