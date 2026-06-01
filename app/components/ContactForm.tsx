"use client";

import { useState } from "react";

const ENDPOINT = "https://formsubmit.co/ajax/pilotoapps.dev@gmail.com";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-transparent focus:ring-2 focus:ring-violet-500";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: "Nuevo mensaje desde PilotoApps" }),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="py-10 text-center">
        <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </span>
        <h3 className="mb-2 text-2xl font-bold text-white">¡Mensaje enviado!</h3>
        <p className="text-slate-300">Te respondo lo antes posible con una propuesta.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Nombre</label>
          <input name="name" required placeholder="Tu nombre" className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">Teléfono o correo</label>
          <input name="phone" required placeholder="Para responderte" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">¿Qué necesitas?</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Cuéntame brevemente sobre tu negocio y qué quieres resolver..."
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 py-4 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.01] disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          No se pudo enviar. Escríbeme directo por WhatsApp o correo.
        </p>
      )}
    </form>
  );
}
