import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Featured Posts */}
        {/* Recent Blogs */}
      </main>
    </>
  );
}