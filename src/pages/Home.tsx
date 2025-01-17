import { useEffect, useState } from 'react';
import Header from '../components/Header';
import IntroPost from '../components/IntroPost';
import Search from '../components/Search';
import { getPost } from '../services/GlobalApi';
import BlogList from '../components/Blog/BlogList';
import { useNavigate } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  description: string;
  tags: string;
  coverImage: string | null;
}

const Home = () => {

  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [orgPost, setOrgPost] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts(); 
  }, []);

  const fetchPosts = async () => { 
    try {
      const response = await getPost();
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
      setPosts(orgPost); 
      return;
    }

    const result = orgPost.filter((item: Post) =>
      item.tags.split(',').map((t) => t.trim()).includes(tag)
    );

    setPosts(result);
  };

  return (
    <div className="relative p-[20px]">
      <Search selectedTag={(tag: string) => filterPost(tag)} />
      {posts.length > 0 ? <IntroPost post={posts[0]} /> : null}
      {posts.length > 0 ? <BlogList posts={posts} /> : null}

      <div className="absolute bottom-4 right-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" onClick={() => navigate('/BlogForm')}>
          Create New Post
        </button>
      </div>
    </div> 
  );
};

export default Home;
