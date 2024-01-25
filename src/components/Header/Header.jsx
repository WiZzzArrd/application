import style from "./header.module.css";
import vk from "../../assets/img/vk.png";
import {NavLink} from "react-router-dom";
import Loader from "../../UI/Loader/Loader";

function Header(props) {

    let loginData = ""

    if(props.isAuth){
      loginData =  props.login
    }else{
      loginData =  <NavLink to ="/login">Login</NavLink>
    }

  return (
    <header className={style.header}>
      <div className={style["header__nav"]}>
        <div className={style.logo}>
          <img width={30} height={30} src={vk} alt='logo' />
          <p className={style["logo-text"]}>ВКОНТАКТЕ</p>
        </div>
        <div className="search">
          <input placeholder="Поиск" type='text' />
        </div>



        <div className={style.login}>
            {props.isLoading ? <Loader/> : loginData}
        </div>
      </div>
    </header>
  );
}

export default Header;
