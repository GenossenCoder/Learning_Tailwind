import React from 'react'
import Post from './Post'
const PostContainer = () => {
  return (
    <div className="p-8 m-4 my-32 bg-white/10 bg shadow-md rounded-xl">
        <h1 className="p-4 text-white text-4xl">Theme</h1>
        <div className="grid grid-cols-5 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
    </div>
  )
}

export default PostContainer