import React from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const { pathname } = useLocation();

  React.useEffect(() => {
    setTitle(pathname);
    switch (pathname) {
      case '/account/stats':
        setTitle('Estatísticas');
        break;
      case '/account/post':
        setTitle('Adicionar Foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
