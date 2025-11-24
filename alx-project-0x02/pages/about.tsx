// pages/about.tsx

import React from 'react';
import Head from 'next/head';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main className="p-10">
        <h1 className="text-4xl font-bold text-indigo-600">About ALX Project 2</h1>
        <p className="mt-4 text-gray-600">
          This project demonstrates basic Next.js routing with the Pages Router, TypeScript, and Tailwind CSS.
        </p>
        <div className="flex flex-col space-y-6">
          {/* Example 1: Small and Rounded-sm */}
          <Button 
            size="small" 
            shape="rounded-sm" 
            onClick={() => alert('Clicked Small Button!')}
          >
            Small Button (rounded-sm)
          </Button>

          {/* Example 2: Medium and Rounded-full (Pill Shape) */}
          <Button 
            size="medium" 
            shape="rounded-full" 
            onClick={() => alert('Clicked Medium Button!')}
          >
            Medium Button (rounded-full)
          </Button>

          {/* Example 3: Large and Rounded-md (Default) */}
          <Button 
            size="large" 
            shape="rounded-md" 
            onClick={() => alert('Clicked Large Button!')}
            // Adding an extra prop to show standard HTML attributes are supported
            disabled={false} 
          >
            Large Button (rounded-md)
          </Button>
        </div>
      </main>
    </>
  );
};

export default AboutPage;