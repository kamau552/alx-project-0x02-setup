import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";


export default function PostsPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold">Posts Page</h2>
        <div className="mt-4 w-60 ">
        <Card
        title ="Welcome to posts"
        content ="posts page is a modern, reusable card component using TypeScript and Tailwind CSS."
      />
        </div>
      </main>
    </>
  );
}
