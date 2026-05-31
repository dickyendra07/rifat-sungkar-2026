"use client";

import { FormEvent, useState } from "react";

const inquiryTypes = [
  { label: "Partnership", value: "partnership" },
  { label: "Sponsorship", value: "sponsorship" },
  { label: "Media Request", value: "media-request" },
  { label: "Event Collaboration", value: "event-collaboration" },
  { label: "General Inquiry", value: "general-inquiry" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      inquiryType: String(formData.get("inquiryType") || "general-inquiry"),
      message: String(formData.get("message") || ""),
    };

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setMessage(data.message || "Failed to submit inquiry.");
        return;
      }

      setStatus("success");
      setMessage("Thank you. Your inquiry has been submitted successfully.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-[#111820] p-5 shadow-2xl shadow-black/25 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <label className="block">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
            Full Name
          </span>
          <input
            name="fullName"
            type="text"
            required
            placeholder="Your name"
            className="mt-3 min-h-[52px] w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#f19ac2] focus:bg-black/35"
          />
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="mt-3 min-h-[52px] w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#f19ac2] focus:bg-black/35"
          />
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
            Phone / WhatsApp
          </span>
          <input
            name="phone"
            type="text"
            placeholder="+62..."
            className="mt-3 min-h-[52px] w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#f19ac2] focus:bg-black/35"
          />
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
            Inquiry Type
          </span>
          <select
            name="inquiryType"
            defaultValue="partnership"
            className="mt-3 min-h-[52px] w-full rounded-xl border border-white/10 bg-black/25 px-4 text-sm text-white outline-none transition focus:border-[#f19ac2] focus:bg-black/35"
          >
            {inquiryTypes.map((item) => (
              <option key={item.value} value={item.value} className="bg-[#111820] text-white">
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us about your inquiry..."
          className="mt-3 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/25 focus:border-[#f19ac2] focus:bg-black/35"
        />
      </label>

      {message ? (
        <div
          className={[
            "mt-5 rounded-2xl border px-5 py-4 text-sm font-bold leading-6",
            status === "success"
              ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
              : "border-rose-400/25 bg-rose-400/10 text-rose-100",
          ].join(" ")}
        >
          {message}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#62d9db] to-[#f19ac2] px-8 py-4 text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
          →
        </span>
        {status === "loading" ? "Submitting..." : "Send Inquiry"}
      </button>
    </form>
  );
}
