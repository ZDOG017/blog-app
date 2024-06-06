const About = () => {
    return (
      <div className="container mx-auto p-4">
        <section className="text-center my-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-700">Learn more about our mission, our team, and what drives us.</p>
        </section>
  
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to provide high-quality, engaging content that informs, entertains, and inspires our readers. We believe in the power of stories and insights to make a positive impact on our community and the world.
          </p>
        </section>
  
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white p-4 border rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-black">Baurma</h3>
                <p className="text-gray-700">Editor-in-Chief</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white p-4 border rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-black">Daulet Issatayev</h3>
                <p className="text-gray-700">Content Strategist</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white p-4 border rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-black">Madina</h3>
                <p className="text-gray-700">Lead Writer</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white p-4 border rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-black">Alibek Seitov</h3>
                <p className="text-gray-700">Contributor</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white p-4 border rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-black">Uldana</h3>
                <p className="text-gray-700">Contributor</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="my-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-700 mb-4">
            We are always looking for passionate individuals to join our community. Whether you’re a writer, editor, or just someone with a great story to tell, we’d love to hear from you!
          </p>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="inline-block bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-600">Contact Us</a>
        </section>
      </div>
    );
  };
  
  export default About;
  