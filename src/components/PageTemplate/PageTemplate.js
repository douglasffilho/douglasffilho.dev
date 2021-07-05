import { Header, Icon, Logo } from 'components';
import {
  ChatIcon,
  ExploreIcon,
  HomeIcon,
  LikeIcon,
} from 'components/Assets/Icons';
import Head from 'next/head';

export const PageTemplate = ({ children }) => {
  return (
    <div className="PageTemplate">
      <Head>
        <title>Devgram</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles.css" />
        <link rel="stylesheet" href="PageTemplate.css" />
      </Head>
      <Header>
        <Logo text="Devgram" />
        <div />
        <div className="Icons container small">
          <Icon title="Página Inicial">
            <HomeIcon />
          </Icon>

          <Icon title="Fale Comigo">
            <ChatIcon />
          </Icon>

          <Icon title="Me acompanhe no LinkedIn">
            <ExploreIcon />
          </Icon>

          <Icon title="Me acompanhe no Github">
            <LikeIcon />
          </Icon>
        </div>
      </Header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
