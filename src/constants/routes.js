import Users from '../components/pages/Users';
import Posts from '../components/pages/Posts';
import Post from '../components/pages/Post';
import NotFound from '../components/pages/NotFound';

export default [
  {
    path: '/',
    component: Users,
    exact: true,
  },
  {
    path: '/user/:userId',
    component: Posts,
    exact: true,
  },
  {
    path: '/user/:userId/:postId',
    component: Post,
    exact: true,
  },
  {
    path: '*',
    component: NotFound,
  },
]