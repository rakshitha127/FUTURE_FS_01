import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

   const handleSubmit = async (e) => {
  e.preventDefault();



  try {
    console.log("Submitting form...");

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    console.log("Response status:", response.status);

    const data = await response.json();

    console.log("Server response:", data);

    if (data.success) {
      alert("Email sent!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Failed: " + data.error);
    }
  } catch (error) {
    console.error(error);
    alert("Fetch Error: " + error.message);
  }
};

  return (
    <section id="contact" className="py-20 px-4 flex justify-center">
      <div className="w-full max-w-2xl">

        <h2 className="text-3xl font-semibold mb-8 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-lg"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:outline-none focus:border-blue-500 resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
