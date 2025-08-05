import React from 'react';

export const metadata = {
  title: "Contact SERA Innovation – Let's Build Together",
  description:
    "Get in touch with SERA Innovation to discuss AI consulting, development, or training for your organization.",
  openGraph: {
    title: "Contact SERA Innovation – Let's Build Together",
    description:
      "Connect with our team to explore AI solutions tailored to your needs.",
    url: "https://www.serainnovation.com/contact",
    images: [
      {
        url: "/logo-serainnovation.png",
        width: 1200,
        height: 630,
        alt: "Contact SERA Innovation",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Contact Us</h1>
      <p>
        Have questions or want to discuss a project? We'd love to hear from you.
      </p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Your Name" required style={{ padding: '0.5rem' }} />
        <input type="email" placeholder="Your Email" required style={{ padding: '0.5rem' }} />
        <textarea placeholder="Your Message" rows={5} required style={{ padding: '0.5rem' }} />
        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
      <img
        src="/visuals/contact-illustration.png"
        alt="Contact Illustration"
        style={{ width: '100%', marginTop: '2rem', borderRadius: '8px' }}
      />
    </div>
  );
}

