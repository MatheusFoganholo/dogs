import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = ({ id, comments, single }) => {
  const [commentsList, setCommentsList] = React.useState(() => comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [commentsList]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ''}`}
      >
        {commentsList.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}:</strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={single}
          id={id}
          setComments={setCommentsList}
        />
      )}
    </>
  );
};

export default PhotoComments;
