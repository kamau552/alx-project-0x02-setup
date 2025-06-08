import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import Card from '@/components/common/Card';

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2 font-bold mb-4">Welcome to the Home Page</h1>

      <Card  title="Home Page" content="Welcome to the home page add something."  />
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200 shadow-md"
        >
          Add Post
        </button>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded shadow">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

