import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        const res = await fetch('/data.json');
        const data = await res.json();
        const post = data.find((p) => p.slug === slug);
        setPost(post);
      };

      fetchData();
    }
  }, [slug]);

  if (!post) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
      </Head>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-black">{post.title}</h1>
        <p className="text-gray-600 mb-4">By {post.author} on {post.date}</p>
        <div className="text-gray-800">{post.description}</div>
        <Link href="/blog" className="inline-block bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-600 mt-4">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
