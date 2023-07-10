import { fetchClient } from '../fetchClient';
import { User } from '../../typedefs';

const loadById = (id: number) => (
  fetchClient.get<User>(`/users/${id}`)
);

export const userApi = {
  loadById,
};
