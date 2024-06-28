"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form submission logic - set these values the same as your template variables in emailjs
    const formData = {
      from_name: name,
      from_email: email,
      message,
      to_name: "Omar"
    };


    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[280px] sm:w-[460px] md:w-[560px] lg:w-[600px] my-5 mx-auto p-8 bg-white rounded shadow-md"
    >
      <h2 className="font-montserrat text-center text-2xl font-bold mb-6">Shoot Me a Message!</h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-second"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-second"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-second"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
          rows={5}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-majorelle-blue text-white font-bold rounded hover:bg-majorelle-dark focus:outline-none focus:ring-2 focus:ring-majorelle-dark"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
