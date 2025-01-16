import React, { useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'

function IntroPost(post: any) {
  return (
    <div>
      <img src= {post.coverImag}/>
      <div>
        <h4>{post.tag}</h4>
        <h2>{post.title}</h2>
        <h4>{post.desc}</h4>
      </div>
    </div>
  )
}

export default IntroPost