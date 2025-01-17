import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../services/GlobalApi';
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface Post {
  id: number;
  title: string;
  description: string;
  tag: string;
  coverImage: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Use type annotation for params
  const [post, setPost] = useState<Post | null>(null); // Use `Post | null` for type safety

  useEffect(() => {
    if (id) {
      console.log('Id:', id);
      getBlogById();
    }
  }, [id]);

  const getBlogById = async () => {
    try {
      const resp = await GlobalApi.getPostById(id); // Ensure `id` is passed as a parameter
      const item = resp.data;
      const result: Post = {
        id: item.id,
        title: item.title,
        description: item.description,
        tag: item.tag,
        coverImage: item.coverImage,
      };
      setPost(result);
      console.log('Result:', result);
    } catch (error) {
      console.error('Error fetching blog post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>; // Display a loader or fallback UI while the data is being fetched
  }

  return (
    <div className="px-6 md:px-20 lg:px-56 mt-10">
      <h3 className="text-red-500 text-[12px]">{post.tag}</h3>
      <h3 className="text-[23px] font-bold">{post.title}</h3>
      <div className="flex items-center mt-5">
        <img
          src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png"
          className="w-[35px] rounded-full"
          alt="Author"
        />
        <div className="ml-2">
          <h3 className="font-bold text-[12px]">Tubeguruji</h3>
          <h3 className="text-gray-500 text-[10px]">24 Sept 2024</h3>
        </div>
      </div>
      <img
          src={`data:image/png;base64,${post.coverImage}`}
          className="rounded-2xl mt-5 mb-5 w-full"
        alt="Blog Cover"
      />
      <div>{post.description}</div>
      {/* <ReactMarkdown children={post.desc} escapeHtml={false} className="leading-9" /> */}
    </div>
  );
};

export default BlogDetail;
