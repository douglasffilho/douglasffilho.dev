import Head from 'next/head';

export const Logo = ({ text }) => {
  return (
    <div className="Logo">
      <Head>
        <link rel="stylesheet" href="Logo.css" />
      </Head>
      {text}
    </div>
  );
};
