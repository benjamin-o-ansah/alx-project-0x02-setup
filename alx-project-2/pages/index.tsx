// pages/index.tsx

import Head from 'next/head';
import { WelcomeProps } from '../interfaces';
import Header from '../components/layout/Header';

const Home: React.FC<WelcomeProps> = ({ appName }) => {
  return (
    <>
      <Head>
        <title>{appName} - Home</title>
        <meta name="description" content="Next.js project with TS and Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">{appName}</span>
        </h1>
        <p className="text-xl text-gray-600">
          This project is scaffolded with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </main>
    </>
  );
};

// Use getStaticProps to provide the required prop
export const getStaticProps = async () => {
  return {
    props: {
      appName: 'alx-project-2',
    },
  };
};

export default Home;