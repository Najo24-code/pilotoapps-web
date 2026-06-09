"use client";

import { useState } from "react";

/* ── Demo Forja — Sistema de cobros y préstamos para PYME/financiera ───────
   Compuesto como la jornada del cobrador: la lista de cuotas del día manda,
   con cartera, recaudo y mora de apoyo. Datos de muestra. ──────────────── */

const NAV: [string, string][] = [
  ["Cobros de hoy", "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"],
  ["Préstamos", "M2.25 18.75a60.07 60.07 0 0 1 15.797-2.101c.727-.198 1.453.069 1.953.606m-17.75 1.495a3 3 0 0 1 2.83-2.005l.5.001M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"],
  ["Clientes", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"],
  ["Mora", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"],
  ["Reportes", "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"],
];

const KPIS = [
  { label: "Cartera activa", value: "RD$ 1.24M", sub: "142 préstamos", tone: "slate" },
  { label: "Por cobrar hoy", value: "RD$ 86,500", sub: "24 cuotas", tone: "indigo" },
  { label: "Cobrado hoy", value: "RD$ 52,300", sub: "60% de la meta", tone: "emerald" },
  { label: "En mora", value: "RD$ 38,200", sub: "9 clientes", tone: "rose" },
];

// Cliente, préstamo, cuota actual, total cuotas, monto, vence, estado
const CUOTAS: [string, string, number, number, string, string, "Pagado" | "Pendiente" | "Mora"][] = [
  ["Pedro Cruz", "L-176", 11, 12, "RD$ 5,000", "Hoy", "Pagado"],
  ["Ana Reyes", "L-204", 6, 12, "RD$ 3,500", "Hoy", "Pendiente"],
  ["José Martí", "L-198", 3, 10, "RD$ 2,800", "Hoy", "Pendiente"],
  ["Carla Díaz", "L-187", 9, 12, "RD$ 4,200", "Atrasado 2 días", "Mora"],
  ["Luis Peña", "L-211", 1, 8, "RD$ 1,900", "Hoy", "Pendiente"],
  ["Rosa Fermín", "L-165", 8, 9, "RD$ 2,400", "Hoy", "Pendiente"],
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

const Icon = ({ d, className = "h-5 w-5" }: { d: string; className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function Page() {
  const [active, setActive] = useState("Cobros de hoy");

  return (
    <div
      className="flex min-h-screen w-full bg-slate-100 text-slate-800 antialiased"
      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      {/* ── Sidebar ─────────────────────────────────────────────── */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-900 px-4 py-5 text-slate-300 lg:flex">
        <div className="flex items-center gap-2.5 px-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white">C</span>
          <span className="font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Cobros
          </span>
        </div>

        <nav className="mt-7 flex flex-col gap-1">
          {NAV.map(([label, d]) => {
            const on = active === label;
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  on ? "bg-emerald-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon d={d} />
                {label}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto rounded-xl bg-slate-800/60 p-4">
          <p className="text-xs text-slate-400">Recaudo de hoy</p>
          <p className="mt-1 text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            RD$ 52,300
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: "60%" }} />
          </div>
          <p className="mt-1.5 text-xs text-slate-500">60% de la meta del día</p>
        </div>
      </aside>

      {/* ── Main ────────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex items-center gap-4 border-b border-slate-200 bg-white px-5 py-3.5 sm:px-7">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white lg:hidden">C</span>
          <div className="min-w-0">
            <p className="truncate text-[0.92rem] font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Préstamos La Confianza
            </p>
            <p className="truncate text-xs text-slate-400">Santo Domingo · Ruta Centro</p>
          </div>
          <div className="ml-auto hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 md:flex">
            <Icon d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" className="h-4 w-4" />
            Buscar cliente o préstamo…
          </div>
          <button className="relative rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
            <Icon d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500" />
          </button>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">JS</span>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                Cobros de hoy
              </h1>
              <p className="mt-1 text-sm text-slate-500">Lunes 9 de junio · 24 cuotas programadas</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-500">
              <Icon d="M12 4.5v15m7.5-7.5h-15" className="h-4 w-4" />
              Nuevo préstamo
            </button>
          </div>

          {/* KPIs */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {KPIS.map((k) => (
              <div key={k.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">{k.label}</p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  {k.value}
                </p>
                <p className="mt-1.5 text-xs text-slate-400">{k.sub}</p>
              </div>
            ))}
          </div>

          {/* Worklist + lateral */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {/* Lista de cuotas del día — el corazón del sistema */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  Cuotas del día
                </h2>
                <span className="text-xs text-slate-400">6 de 24</span>
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

            {/* Recaudo semana + mora */}
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
    </div>
  );
}
