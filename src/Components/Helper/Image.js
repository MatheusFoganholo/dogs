/* eslint-disable no-param-reassign */
import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton} />}
      <img
        className={styles.img}
        src=""
        alt={alt}
        {...props}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default Image;
