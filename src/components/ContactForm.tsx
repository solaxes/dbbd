"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-gold/40 bg-gold/10 p-8 text-center">
        <p className="font-heading text-xl text-foreground">Thank you for your message</p>
        <p className="text-muted mt-3 text-sm">
          Your enquiry has been received. We will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-border bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="font-heading mb-6 text-2xl text-foreground">Send a Message</h2>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border border-border px-3 py-2 text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-border px-3 py-2 text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full resize-y rounded-sm border border-border px-3 py-2 text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-sm bg-gradient-to-b from-gold-light to-gold-dark px-6 py-3 text-sm font-bold text-[#785510] shadow transition hover:from-gold-dark hover:to-gold-light sm:w-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
