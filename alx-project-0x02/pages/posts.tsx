// pages/posts.tsx

import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next'; // Import the type for getStaticProps
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard'; // Import the new PostCard
import { type Post, type PostCardProps, type  PostsPageProps} from '@/interfaces'; // Import the Post type

// Define the Props type for the component


const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts Index | Static Data</title>
      </Head>
      
      <Header />

      <main className="p-10 container mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-10">Latest Blog Posts (Static Fetch)</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Map the fetched data and render PostCard */}
          {posts.map((post) => (
            <PostCard 
              key={post.title + post.userId} // Simple key combining title and user
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
        
        {posts.length === 0 && (
          <p className="text-center text-gray-500">No posts found. Check API connection.</p>
        )}
      </main>
    </>
  );
};

export default PostsPage;

// --- Data Fetching Function ---
export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  // 1. Retrieve the base URL from the environment variables
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  // 2. Combine the base URL with the endpoint
  const endpoint = '/posts'; 
  const fullUrl = `${BASE_URL}${endpoint}`;

  if (!BASE_URL) {
    console.error("API_BASE_URL is not defined in environment variables.");
    // Handle the error gracefully
    return { props: { posts: [] }, revalidate: 60 };
  }

  try {
    const res = await fetch(fullUrl); // Use the full URL variable
    const data: Post[] = await res.json();
    
    // ... rest of the mapping logic
    const posts: PostCardProps[] = data.map(post => ({
      title: post.title,
      body: post.body,
      userId: post.userId
    }));

    return {
      props: {
        posts,
      },
      revalidate: 3600, 
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    };
  }
};