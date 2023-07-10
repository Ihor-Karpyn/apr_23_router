import { fetchClient } from '../fetchClient';

const loadByPostId = (postId: string) => (
  fetchClient.get<Comment[]>(`/comments?postId=${postId}`)
);

export const commentApi = {
  loadByPostId,
};
