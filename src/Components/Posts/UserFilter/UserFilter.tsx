import { FC } from 'react';
import { MenuItem, Select } from '@mui/material';
import { useAppSearchParams } from '../../../hooks/useAppSearchParams';

interface Props {
  userIds: number[];
}

export const UserFilter: FC<Props> = ({ userIds }) => {
  const [selectedUserId, setSelectedUserId] = useAppSearchParams('userId');

  const changeUserIdHandler = (userId: string) => {
    setSelectedUserId(userId);
  };

  return (
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={selectedUserId || ''}
      onChange={(event) => changeUserIdHandler(event.target.value)}
      label="Age"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>

      {userIds.map((userId) => (
        <MenuItem key={userId} value={userId}>
          {userId}
        </MenuItem>
      ))}

    </Select>
  );
};
