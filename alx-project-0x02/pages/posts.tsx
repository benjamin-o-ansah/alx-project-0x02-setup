// pages/posts.tsx

import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header'; // Will be updated to use the Header component

const PostsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Posts Index</title>
      </Head>
      
      <Header /> {/* Ensure the Header is included */}

      <main className="p-10">
        <h1 className="text-4xl font-bold text-yellow-300">All Posts</h1>
        <p className="mt-4 text-yellow-600">This page serves as the index for all blog posts in the application.</p>
        {/* You could add a list of posts here */}
      </main>
    </>
  );
};

export default PostsPage;