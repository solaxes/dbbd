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
      <div className="card card-elevated p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
          <svg className="h-7 w-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-heading text-2xl text-foreground">Thank you</p>
        <p className="text-muted mt-3 text-sm leading-relaxed">
          Your message has been received. We will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card card-elevated p-6 sm:p-8">
      <h2 className="font-heading mb-2 text-2xl text-foreground">Send a Message</h2>
      <p className="text-muted mb-6 text-sm">We would love to hear from you.</p>
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground transition outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground transition outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 text-foreground transition outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Send Message
        </button>
      </div>
    </form>
  );
}
