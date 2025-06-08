import { GetStaticProps } from 'next';
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";


interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function PostsPage({ posts }: PostsPageProps) {
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
