// pages/home.tsx

// pages/home.tsx

import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header'; // Using path alias @/
import Card from '@/components/common/Card';   // Using path alias @/
// import Header from '../components/layout/Header'; // Assuming Header is used for layout
// import Card from '../components/common/Card'; // Import the new Card component

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      
      <Header /> {/* Using the shared layout component */}

      <main className="p-10">
        <h1 className="text-4xl font-bold text-green-600 mb-10">Welcome Home!</h1>
        <p className="mt-4 text-gray-600 mb-8">This page demonstrates the reusable Card component.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Instance 1: Project Info */}
          <Card 
            title="Next.js & TypeScript" 
            content="This project is built using Next.js with the Pages Router and strong typing provided by TypeScript." 
          />
          
          {/* Card Instance 2: Styling Info */}
          <Card 
            title="Styled with Tailwind CSS" 
            content="Tailwind CSS allows for rapid, utility-first styling directly within the components." 
          />
          
          {/* Card Instance 3: Routing Info */}
          <Card 
            title="File-System Routing" 
            content="Pages are routed automatically by their file name in the 'pages' directory (/home.tsx = /home)." 
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;