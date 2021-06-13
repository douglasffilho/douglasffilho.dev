import Head from 'next/head';

import { Heading } from '~/components/Heading';

const Home = () => {
  return (
    <div>
      <Head>
        <title>What Douglas can do for you</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Douglas.js</Heading>
      </main>
    </div>
  );
};

export default Home;
