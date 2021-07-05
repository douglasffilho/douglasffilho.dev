import Head from 'next/head';

export const Icon = ({ children, direction, title }) => {
  return (
    <div className={`Icon ${direction || 'top'}`} title={title}>
      <Head>
        <link rel="stylesheet" href="Icon.css" />
      </Head>
      {children}
    </div>
  );
};
