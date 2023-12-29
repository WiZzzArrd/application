import styles from "./navbar.module.css";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <NavLink to='/profile'>Профиль</NavLink>
                </li>
                <li>
                    <NavLink to='/news'>Новости</NavLink>
                </li>
                <li>
                    <NavLink to='/messages'>Сообщения</NavLink>
                </li>
                <li>
                    <NavLink to='/friends'>Друзья</NavLink>
                </li>

                <li>
                    <NavLink to='/music'>Музыка</NavLink>
                </li>
                <li>
                    <NavLink to='/settings'>Настройки</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
