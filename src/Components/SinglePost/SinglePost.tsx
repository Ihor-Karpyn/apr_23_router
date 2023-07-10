import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import Button from '@mui/material/Button';
import { Post } from '../../typedefs';
import { postApi } from '../../api/api/post.api';

const isStringFiniteNumber = (str: string): boolean => {
  return /^\d+$/.test(str);
};

export const SinglePost: FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const isValid = isStringFiniteNumber(postId || '');

    if (!isValid) {
      navigate('/not-found');
    }

    if (isValid) {
      postApi.loadById(Number(postId))
        .then(setPost)
        .catch(() => navigate('/not-found'));
    }
  }, [postId]);

  return (
    <>
      <h1>SinglePost </h1>
      {!post && <LinearProgress />}

      {post && (
        <>
          <h2>{`#${post.id} ${post.title}`}</h2>
          <p>{post.body}</p>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        </>
      )}

      <Button
        onClick={() => navigate(-1)}
        variant="contained"
      >
        Back
      </Button>
    </>
  );
};
