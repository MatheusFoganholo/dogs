import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" activeClassName={styles.active} end>
        <MyPhotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/account/stats" activeClassName={styles.active}>
        <StatsIcon />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/account/post" activeClassName={styles.active}>
        <AddPhoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button type="button" onClick={userLogout}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
