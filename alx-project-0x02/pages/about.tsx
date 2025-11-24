// pages/about.tsx

import React from 'react';
import Head from 'next/head';

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
      </main>
    </>
  );
};

export default AboutPage;