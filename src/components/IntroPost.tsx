// import author from '../assets/images/author.png'
interface Post {
  id: number;
  title: string;
  description: string;
  tags: string;
  coverImage: string | null;
}

const IntroPost: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2
    mt-10 px-10 md:px-15 lg:px-32 gap-8'>
      {post.coverImage && (
        <img
        src={`data:image/jpeg;base64,${post.coverImage}`}
        alt="Cover"
        className='rounded-2xl object-cover w-full h-full'
      />
      )}
      <div>
        {/* <h4 className='text-red-500'>{post.tags}</h4> */}
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.description}</h4>
        <div className='flex items-center mt-5'>
          <img src='https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png' className='w-[50px] rounded-full' />
          <div className='ml-2'>
            <h3 className='font-bold'>Arooj Sikandar</h3>
            <h3 className='text-gray-500'>January, 2025</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntroPost