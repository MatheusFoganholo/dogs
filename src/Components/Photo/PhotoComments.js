import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = ({ id, comments }) => {
  const [commentsList, setCommentsList] = React.useState(() => comments);
  const { login } = React.useContext(UserContext);

  return (
    <>
      <ul className={styles.comments}>
        {commentsList.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}:</strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setComments={setCommentsList} />}
    </>
  );
};

export default PhotoComments;
