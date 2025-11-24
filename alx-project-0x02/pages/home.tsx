// pages/home.tsx

import React from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="p-10">
        <h1 className="text-4xl font-bold text-green-600">Welcome Home!</h1>
        <p className="mt-4 text-gray-600">This is the main application landing page.</p>
      </main>
    </>
  );
};

export default HomePage;