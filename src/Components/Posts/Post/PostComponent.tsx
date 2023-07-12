import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Post } from '../../../typedefs';
import { LinkWithSearchParams } from '../../LinkWithSearchParams';

export interface Props {
  post: Post;
}

export const PostComponent: FC<Props> = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`#${post.userId} ${post.title}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <LinkWithSearchParams
          to={`/posts/${post.id}`}
        >
          <Button size="small">
            Learn More
          </Button>
        </LinkWithSearchParams>
      </CardActions>
    </Card>
  );
};
