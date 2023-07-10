import {
  FC, useEffect, useState,
} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Post } from '../../typedefs';
import { PostComponent } from './Post/PostComponent';
import { postApi } from '../../api/api/post.api';

export const Posts: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    postApi.loadAll().then(setPosts);
  }, []);

  return (
    <>
      <h1>Posts page</h1>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <PostComponent post={post} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
