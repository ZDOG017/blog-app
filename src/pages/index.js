import { useEffect, useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">FaceCook</h1>
        <p className="text-xl text-gray-700">Discover amazing content and stay updated with our latest posts.</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        <div className="flex flex-wrap -mx-2">
          {posts.slice(0, 3).map((post) => (
            <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="relative bg-white p-4 border rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-bg-opacity duration-300"></div>
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">{post.title}</h2>
                  <p className="text-gray-700 mb-2 group-hover:text-gray-300 transition-colors duration-300">{post.description}</p>
                  <p className="text-gray-600 text-sm group-hover:text-gray-400 transition-colors duration-300">By {post.author} on {post.date}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <Link className="bg-blue-500 text-white py-2 px-4 rounded" href={`/blog/${post.slug}`}>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link className="inline-block bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-600" href="/blog">
            View All Posts
          </Link>
        </div>
      </section>

      <section className="my-8 text-center">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-xl text-gray-700">We are dedicated to providing you with the best content on various topics. Stay tuned and explore our blog for more insights.</p>
      </section>
    </div>
  );
};

export default Home;
