import Head from 'next/head';

export const Header = ({ children }) => {
  return (
    <header className="Header container">
      <Head>
        <link rel="stylesheet" href="Header.css" />
      </Head>
      {children}
    </header>
  );
};
