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
              <p className="text-gray-600">Hackathon!</p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Event 2</h4>
              <p className="text-gray-600">Workshop!</p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-4">Event 3</h4>
              <p className="text-gray-600">Recruitments!</p>
            </div>
          </div>
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
