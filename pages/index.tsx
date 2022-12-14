import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import OneClickCard from '../components/OneClickCard';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-6 min-h-screen">
        <Nav />
        <main>
          <OneClickCard />
        </main>
      </div>

      <footer></footer>
    </div>
  );
};

export default Home;
