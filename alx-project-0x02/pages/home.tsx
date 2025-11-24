// pages/home.tsx

import React, { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal'; // Import the new Modal
import { type Post } from '@/interfaces'; // Import the Post interface

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    // Initial post data
    { id: 1, title: "Initial Post 1", content: "This is the first default post content." },
    { id: 2, title: "Next.js & TypeScript", content: "This project is built using Next.js with the Pages Router and strong typing provided by TypeScript." },
    { id: 3, title: "Styled with Tailwind CSS", content: "Tailwind CSS allows for rapid, utility-first styling directly within the components." },
  ]);

  // Handler for adding a new post from the modal
  const handleSavePost = (newPostData: Omit<Post, 'id'>) => {
    const newPost: Post = {
      // Simple way to generate a unique ID for demo purposes
      id: Date.now(), 
      ...newPostData,
    };
    
    // Add the new post to the beginning of the array
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <Head>
        <title>Home Page | Dynamic Content</title>
      </Head>
      
      <Header />

      <main className="p-10 container mx-auto">
        <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold text-green-600">Dynamic Home Feed</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              + Create New Post
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dynamically map and render the posts */}
          {posts.map((post) => (
            <Card 
              key={post.id} 
              title={post.title} 
              content={post.content} 
            />
          ))}
        </div>
      </main>

      {/* The Modal Component */}
      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSavePost}
      />
    </>
  );
};

export default HomePage;