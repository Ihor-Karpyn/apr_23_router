import {
  FC, useEffect, useMemo, useState,
} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Post } from '../../typedefs';
import { PostComponent } from './Post/PostComponent';
import { postApi } from '../../api/api/post.api';
import { UserFilter } from './UserFilter/UserFilter';
import { useAppSearchParams } from '../../hooks/useAppSearchParams';

export const Posts: FC = () => {
  const [selectedUserId] = useAppSearchParams('userId');
  const [posts, setPosts] = useState<Post[]>([]);

  const filteredPosts = useMemo(() => (selectedUserId
    ? posts.filter((post) => (
      post.userId === Number(selectedUserId)
    ))
    : posts
  ), [posts, selectedUserId]);

  const availableUserIds = useMemo(() => {
    const ids = posts.map(post => post.userId);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return [...new Set(ids)];
  }, [posts]);

  useEffect(() => {
    postApi.loadAll().then(setPosts);
  }, []);

  return (
    <>
      <h1>Posts page</h1>
      <UserFilter userIds={availableUserIds} />
      <List>
        {filteredPosts.map((post) => (
          <ListItem key={post.id}>
            <PostComponent post={post} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
