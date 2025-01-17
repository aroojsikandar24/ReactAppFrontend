import React from 'react'
import { useNavigate } from 'react-router-dom'

function BlogList({ posts }: { posts: any[] }) { // Destructure posts from props and define its type
  const navigate = useNavigate()

  if (!Array.isArray(posts)) {
    return <div>No posts available</div> // Handle non-array or undefined posts
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
      {posts.map((item) => (
        <div
          key={item.id}
          className='m-4 cursor-pointer'
          onClick={() => navigate('blog-detail/' + item.id)}
        >
           {item.coverImage && (
            <img
            src={`data:image/png;base64,${item.coverImage}`}
            alt="Cover"
            className='w-full rounded-2xl object-cover h-[200px]'
          />
          
          )}

          <h3 className='text-red-500 mt-3'>{item.tag}</h3>
          <h3 className='font-bold mt-3'>{item.title}</h3>
          <h3 className='line-clamp-3 text-gray-400 mt-3'>{item.description}</h3>

          <div className='flex items-center mt-5'>
            <img
              src='https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png'
              className='w-[35px] rounded-full'
              alt='Author'
            />

            <div className='ml-2'>
              <h3 className='font-bold text-[12px]'>Arooj Sikandar</h3>
              <h3 className='text-gray-500 text-[10px]'>Jan, 2025</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogList
