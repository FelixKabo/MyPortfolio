import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_wyvf16o", "template_izcfnuq", form.current, {
        publicKey: "1lq8Yw1Q4pYoaMZEv",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully ✅");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name" // sesuai dengan {{name}} di template
          placeholder="Your Name"
          required
          className="h-12 px-2 text-lg rounded-lg bg-lightBrown"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="email" // sesuai dengan {{email}} di template
          placeholder="Your Email"
          required
          className="h-12 px-2 text-lg rounded-lg bg-lightBrown"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message" // sesuai dengan {{message}} di template
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className="p-2 text-lg rounded-lg bg-lightBrown"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full h-12 text-xl font-bold text-black transition-all duration-500 border rounded-lg border-cyan hover:bg-darkCyan bg-cyan"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
