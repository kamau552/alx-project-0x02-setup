import { useEffect, useState } from 'react';
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";


export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=40')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Posts Page</h2>
        <div className="mt-4 w-60 ">
        {/*<Card
        title ="Welcome to posts"
        content ="posts page is a modern, reusable card component using TypeScript and Tailwind CSS."
      />*/}
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
        </div>
      </main>
    </>
  );
}
