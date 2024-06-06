import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">FaceCook</div>
        <div>
          <Link className="mx-2" href="/">
            Home
          </Link>
          <Link className="mx-2" href="/about">
            About
          </Link>
          <Link className="mx-2" href="/blog">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
