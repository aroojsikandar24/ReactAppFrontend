import { useEffect, useState } from 'react';
import Header from '../components/Header';
import IntroPost from '../components/IntroPost';
import Search from '../components/Search';
import GlobalApi from '../services/GlobalApi';
import Blogs from '../components/Blogs';

interface Post {
  id: number;
  title: string;
  description: string;
  tags: string;
  coverImage: string | null;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [orgPost, setOrgPost] = useState<Post[]>([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await GlobalApi.getPost();
      const result = response.data.map((item: Post) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        tags: item.tags,
        coverImage: item.coverImage,
      }));

      setPosts(result);
      setOrgPost(result);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const filterPost = (tag: string) => {
    if (tag === 'All') {
      setPosts(orgPost); // Reset to all posts
      return;
    }
  
    const result = orgPost.filter((item: Post) =>
      item.tags.split(',').map(t => t.trim()).includes(tag)
    );
  
    setPosts(result);
  };
  

  return (
    <div className="p-[20px]">
      <Search selectedTag={(tag: string) => filterPost(tag)} />
      {posts.length > 0 ? <IntroPost post={posts[0]} /> : null}
      {posts.length > 0 ? <Blogs posts={posts} /> : null}
    </div>
  );
};

export default Home;
