import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A blog application using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
