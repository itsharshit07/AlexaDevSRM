import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alexa Developers SRM</h1>
          <nav>
            <a href="#events" className="mx-4 hover:underline">Events</a>
            <a href="#domains" className="mx-4 hover:underline">Domains</a>
            <a href="#team" className="mx-4 hover:underline">Our Team</a>
            <a href="#blog" className="mx-4 hover:underline">Blog</a>
            <a href="#contact" className="mx-4 hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to Alexa Developers SRM</h2>
          <p className="text-gray-600 text-lg mb-6">
            Empowering developers to build voice-enabled applications with Alexa.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Card */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Event 1</h4>
              <p className="text-gray-600">Details about Event 1. It's going to be exciting!</p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Event 2</h4>
              <p className="text-gray-600">Details about Event 2. Don't miss it!</p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Event 3</h4>
              <p className="text-gray-600">Details about Event 3. Join us for learning!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section id="domains" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Our Domains</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Domain Card 1 */}
            <div className="bg-gray-200 p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Technical</h4>
              <p className="text-gray-600">Explore cutting-edge technology and advancements.</p>
            </div>

            {/* Domain Card 2 */}
            <div className="bg-gray-200 p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Creatives</h4>
              <p className="text-gray-600">Unleash your creativity and innovation.</p>
            </div>

            {/* Domain Card 3 */}
            <div className="bg-gray-200 p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Business</h4>
              <p className="text-gray-600">Learn about business strategies and growth.</p>
            </div>

            {/* Domain Card 4 */}
            <div className="bg-gray-200 p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Collaborative</h4>
              <p className="text-gray-600">Join our community and collaborate on projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Card */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Harshit Gola</h4>
              <p className="text-gray-600">Role: Developer</p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">John Williams</h4>
              <p className="text-gray-600">Role: Designer</p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">James </h4>
              <p className="text-gray-600">Role: Project Manager</p>
            </div>
          </div>
        </div>
      </section>

       {/* About Us Section */}
       <section id="about" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">About Us</h3>
          <p className="text-gray-600 mb-4">
            The Alexa Developers SRM community is dedicated to fostering innovation and growth 
            in the field of voice technology. We provide a collaborative platform for developers, 
            designers, and business enthusiasts to explore the capabilities of Alexa and build 
            applications that enhance user experiences. 
          </p>
          <p className="text-gray-600">
            Our mission is to empower developers through workshops, events, and resources that 
            help them master voice development and unleash their creativity. Join us to 
            connect with like-minded individuals and elevate your skills!
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="4"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© 2024 Alexa Developers SRM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
