"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // TODO: Send data to backend/email API
    setShowPopup(true);

    // Hide popup after 3s
    setTimeout(() => setShowPopup(false), 3000);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Let’s Build Together</h2>
          <p className="text-gray-700 mb-6">
            Have a project in mind or just curious about what we do? 
            
            Our team will get back to you within 24–48 hours.
          </p>
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Why Partner with Us?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ AI-first consulting expertise</li>
              <li>✅ Proven track record with global clients</li>
              <li>✅ Tailored solutions for your needs</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text" id="name" name="name"
              value={formData.name} onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email" id="email" name="email"
              value={formData.email} onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message" name="message"
              value={formData.message} onChange={handleChange}
              required rows={4}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:scale-[1.02] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Small Popup Dialog */}
      {showPopup && (
        <div className="absolute top-10 right-10 bg-white border border-gray-200 rounded-lg shadow-xl p-4 max-w-xs w-full z-50">
          <h3 className="text-lg font-semibold text-green-600 mb-1">✅ Message Sent!</h3>
          <p className="text-gray-700 text-sm">
            Thank you for reaching out. We'll get back to you soon.
          </p>
        </div>
      )}
    </section>
  );
}
