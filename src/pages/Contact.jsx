const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-10">

        <h1 className="text-4xl font-bold mb-8">
          Contact Us
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-4"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full border rounded-lg p-4"
          ></textarea>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;