import React, { useState, useRef } from "react";
import { Particles } from "../components/Particles";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(); // Required for EmailJS to "grab" the form data
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!isValidEmail(value)) setEmailError("Please enter a valid email address.");
      else setEmailError("");
    }
  };

  const showToast = (type, text) => {
    setToastMessage({ type, text });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    // Using your specific IDs: service_2b0ryb6, template_ap9ryei, and your public key
    emailjs.sendForm(
      'service_2b0ryb6', 
      'template_ap9ryei', 
      form.current, 
      'jrYSlaC3vDrnomurz'
    )
    .then(() => {
      setIsLoading(false);
      showToast("success", "✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      setIsLoading(false);
      showToast("error", "❌ Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            I'm passionate about creating immersive 3D environments and assets
            for games. If you're looking for a dedicated artist to bring your
            vision to life, let's connect and make it happen.
          </p>
        </div>

        <form ref={form} className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              id="name"
              name="name" 
              type="text"
              className="field-input field-input-focus"
              placeholder="Your full name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              name="email" 
              type="email"
              className="field-input field-input-focus"
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message" 
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50"
            disabled={isLoading}
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>

      {toastMessage && (
        <div
          className={`fixed bottom-5 right-5 px-5 py-3 rounded-md shadow-lg text-white z-50 
            transform transition-all duration-300
            bg-gradient-to-r from-lavender to-royal
            ${toastMessage.type === "success" ? "opacity-100" : "opacity-90"} 
            ${toastMessage.type === "error" ? "ring-2 ring-red-400" : "ring-2 ring-lavender/50"}
          `}
        >
          {toastMessage.text}
        </div>
      )}
    </section>
  );
};

export default Contact;