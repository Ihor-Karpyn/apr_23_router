import { fetchClient } from '../fetchClient';
import { Post } from '../../typedefs';

const loadAll = () => (
  fetchClient.get<Post[]>('/posts')
);

const loadById = (id: number) => (
  fetchClient.get<Post>(`/posts/${id}`)
);

export const postApi = {
  loadAll,
  loadById,
};
