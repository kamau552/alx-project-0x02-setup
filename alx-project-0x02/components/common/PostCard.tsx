import React from 'react'
import { PostProps } from '@/interfaces'

const PostCard: React.FC<PostProps> = ({title, body, userId, button}) => {
  return (
    <div className="border rounded-lg  p-4 shadow-md">
        <h2  className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-2">{body}</p>
        <p className="text-sm text-gray-500">Posted by User {userId}</p>
        <div className="rounded-full text-sm text-gray-500">Post {button}</div>
    </div>
  )
}

export default PostCard