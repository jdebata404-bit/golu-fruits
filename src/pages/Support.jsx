import React, { useState } from "react"; // Added useState
import { useNavigate } from "react-router-dom";
import {
  FaHeadset,
  FaShippingFast,
  FaSyncAlt,
  FaQuestionCircle,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Support() {
  const navigate = useNavigate();

  // Simple state to handle form fields like your style
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submission
    alert(`Thank you ${name}! Message sent successfully!`);

    // Clear form
    setName("");
    setEmail("");
    setOrderId("");
    setMessage("");
  };

  const commonTopics = [
    {
      id: 1,
      icon: <FaShippingFast />,
      title: "Delivery Info",
      desc: "Track your fresh fruit delivery status.",
    },
    {
      id: 2,
      icon: <FaSyncAlt />,
      title: "Refunds",
      desc: "Our 24h freshness replacement guarantee.",
    },
    {
      id: 3,
      icon: <FaQuestionCircle />,
      title: "FAQs",
      desc: "Common questions about our organic farms.",
    },
  ];

  return (
    <div className="min-h-screen pb-10 bg-zinc-200 font-sans">
      {/* Hero Section */}
      <div className="bg-slate-800 py-16 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Customer Support
        </h1>
        <p className="text-lg opacity-90">
          Got a question about our fruits? We're here to help!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {commonTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition cursor-pointer"
            >
              <div className="text-4xl text-green-500 mb-4">{topic.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-500 text-sm">{topic.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaHeadset className="text-green-500" /> Send us a message
            </h2>

            {/* Moved onSubmit here where it belongs */}
            <form onSubmit={handleSubmit} className="space-y-4 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Order ID (Optional)"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
              <textarea
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition shadow-lg shadow-green-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Help */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Contact Us?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you have a query about your <b>Mangoes</b>, a delivery
                delay, or want to know more about our <b>Organic Farming</b>{" "}
                practices, our team of fruit experts is ready to assist you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                    Call Support
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    +91 1800-FRUITS-24
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                    Email Us
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    support@freshfruit.com
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/")}
              className="text-green-600 w-fit cursor-pointer font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            >
              ← Back to Fruit Market
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
