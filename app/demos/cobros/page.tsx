"use client";

import { useState } from "react";

/* ── Demo Forja — Sistema de cobros y préstamos ────────────────────────────
   Estructura DISTINTA al panel de gestión a propósito: navegación horizontal
   superior (no sidebar), tira de stats en línea y worklist del cobrador como
   protagonista. Datos de muestra. ─────────────────────────────────────── */

const TABS = ["Cobros de hoy", "Préstamos", "Clientes", "Mora", "Reportes"];

const STATS: [string, string, string][] = [
  ["Cartera activa", "RD$ 1.24M", "142 préstamos"],
  ["Por cobrar hoy", "RD$ 86,500", "24 cuotas"],
  ["Cobrado hoy", "RD$ 52,300", "60% de la meta"],
  ["En mora", "RD$ 38,200", "9 clientes"],
];

// Cliente, préstamo, cuota actual, total cuotas, monto, vence, estado
const CUOTAS: [string, string, number, number, string, string, "Pagado" | "Pendiente" | "Mora"][] = [
  ["Pedro Cruz", "L-176", 11, 12, "RD$ 5,000", "Hoy", "Pagado"],
  ["Ana Reyes", "L-204", 6, 12, "RD$ 3,500", "Hoy", "Pendiente"],
  ["José Martí", "L-198", 3, 10, "RD$ 2,800", "Hoy", "Pendiente"],
  ["Carla Díaz", "L-187", 9, 12, "RD$ 4,200", "Atrasado 2 días", "Mora"],
  ["Luis Peña", "L-211", 1, 8, "RD$ 1,900", "Hoy", "Pendiente"],
  ["Rosa Fermín", "L-165", 8, 9, "RD$ 2,400", "Hoy", "Pendiente"],
  ["Miguel Santos", "L-159", 4, 6, "RD$ 3,100", "Hoy", "Pendiente"],
];

const WEEK: [string, number][] = [
  ["Lun", 44], ["Mar", 51], ["Mié", 39], ["Jue", 62], ["Vie", 70], ["Sáb", 58], ["Dom", 22],
];
const MAX = Math.max(...WEEK.map((w) => w[1]));

const MORA: [string, string, string][] = [
  ["Carla Díaz", "L-187", "2 días"],
  ["Manuel Tavárez", "L-142", "5 días"],
  ["Yokasta Pérez", "L-119", "8 días"],
  ["Ramón Disla", "L-098", "12 días"],
];

const STATUS: Record<string, string> = {
  Pagado: "bg-emerald-50 text-emerald-600",
  Pendiente: "bg-slate-100 text-slate-500",
  Mora: "bg-rose-50 text-rose-600",
};

export default function Page() {
  const [tab, setTab] = useState("Cobros de hoy");

  return (
    <div
      className="flex min-h-screen w-full flex-col bg-slate-100 text-slate-800 antialiased"
      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      {/* ── Top app-bar (horizontal, SIN sidebar) ───────────────── */}
      <header className="bg-slate-900 text-slate-300">
        <div className="flex items-center gap-5 px-5 py-3 sm:px-7">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white">C</span>
            <span className="font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Cobros
            </span>
          </div>
          <div className="ml-auto hidden items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm text-slate-400 md:flex">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            Buscar cliente o préstamo…
          </div>
          <button className="relative rounded-lg p-2 text-slate-400 hover:bg-white/10">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500" />
          </button>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">JS</span>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-5 sm:px-7">
          {TABS.map((t) => {
            const on = tab === t;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`shrink-0 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                  on ? "border-emerald-500 text-white" : "border-transparent text-slate-400 hover:text-white"
                }`}
              >
                {t}
              </button>
            );
          })}
        </nav>
      </header>

      <main className="flex-1 overflow-y-auto p-5 sm:p-7">
        {/* Sub-header + tira de stats en línea */}
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Préstamos La Confianza
            </h1>
            <p className="mt-1 text-sm text-slate-500">Lunes 9 de junio · Ruta Centro · 24 cuotas programadas</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-500">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Nuevo préstamo
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-4 sm:divide-x">
          {STATS.map(([label, value, sub]) => (
            <div key={label} className="px-5 py-4">
              <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
              <p className="mt-1.5 text-xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                {value}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">{sub}</p>
            </div>
          ))}
        </div>

        {/* Worklist + lateral */}
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                Cuotas del día
              </h2>
              <span className="text-xs text-slate-400">7 de 24</span>
            </div>
            <ul className="divide-y divide-slate-100">
              {CUOTAS.map(([cli, prest, n, tot, monto, vence, estado]) => (
                <li key={prest} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                    {cli.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <p className="truncate text-sm font-medium text-slate-800">{cli}</p>
                      <span className="text-xs text-slate-400">· {prest}</span>
                    </div>
                    <div className="mt-1.5 flex items-center gap-2">
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${(n / tot) * 100}%` }} />
                      </div>
                      <span className="text-xs text-slate-400">Cuota {n}/{tot} · {vence}</span>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-bold text-slate-900">{monto}</p>
                    <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${STATUS[estado]}`}>{estado}</span>
                  </div>
                  <button
                    className={`hidden shrink-0 rounded-lg px-3 py-2 text-xs font-semibold sm:block ${
                      estado === "Pagado"
                        ? "cursor-default border border-slate-200 text-slate-300"
                        : "bg-emerald-600 text-white hover:bg-emerald-500"
                    }`}
                  >
                    {estado === "Pagado" ? "Cobrado" : "Registrar pago"}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  Recaudo de la semana
                </h2>
                <span className="text-xs text-slate-400">miles RD$</span>
              </div>
              <div className="mt-5 flex h-28 items-end gap-2">
                {WEEK.map(([day, v], i) => (
                  <div key={day} className="flex h-full flex-1 flex-col items-center gap-1.5">
                    <div className="flex w-full flex-1 items-end">
                      <div
                        className={`w-full rounded-t ${i === 4 ? "bg-emerald-600" : "bg-emerald-200"}`}
                        style={{ height: `${(v / MAX) * 100}%` }}
                      />
                    </div>
                    <span className="text-[0.65rem] text-slate-400">{day}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  En mora
                </h2>
                <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-600">{MORA.length}</span>
              </div>
              <ul className="mt-3 flex flex-col divide-y divide-slate-100">
                {MORA.map(([name, prest, dias]) => (
                  <li key={prest} className="flex items-center justify-between gap-3 py-2.5">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-800">{name}</p>
                      <p className="text-xs text-slate-400">{prest}</p>
                    </div>
                    <span className="shrink-0 rounded-md bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-600">{dias}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Panel de demostración · datos de muestra · construido por Forja
        </p>
      </main>
    </div>
  );
}
