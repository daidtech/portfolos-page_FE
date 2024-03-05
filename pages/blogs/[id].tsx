import BlogComponent from 'src/components/Blog/Blog';
import { BlogTypes } from 'models/Blog';

export default function Show() {
  return (
    <BlogComponent type={BlogTypes.Show} />
  )
}