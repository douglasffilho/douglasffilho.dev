import Head from 'next/head';

import { Heading } from '~/components/Heading';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Template Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Template Next.js</Heading>
      </main>
    </div>
  );
};

export default Home;
