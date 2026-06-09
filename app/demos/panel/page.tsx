"use client";

import { useState } from "react";

/* ── Demo Forja — "El sistema por dentro": panel de gestión para PYME ──────
   No es una web-folleto: es la aplicación que opera el negocio (caja, ventas,
   citas, inventario) en tiempo real. Datos de muestra. ─────────────────── */

const NAV: [string, string][] = [
  ["Resumen", "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"],
  ["Ventas", "M2.25 18.75a60.07 60.07 0 0 1 15.797-2.101c.727-.198 1.453.069 1.953.606m-17.75 1.495a3 3 0 0 1 2.83-2.005l.5.001M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"],
  ["Citas", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"],
  ["Inventario", "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"],
  ["Clientes", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"],
  ["Reportes", "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"],
];

const KPIS = [
  { label: "Caja de hoy", value: "RD$ 18,450", delta: "+12%", sub: "vs. ayer", up: true },
  { label: "Ventas de hoy", value: "37", delta: "+5", sub: "transacciones", up: true },
  { label: "Citas de hoy", value: "12", delta: "3 pend.", sub: "por atender", up: true },
  { label: "Stock bajo", value: "4", delta: "Revisar", sub: "artículos", up: false },
];

const WEEK: [string, number][] = [
  ["Lun", 52], ["Mar", 61], ["Mié", 48], ["Jue", 73], ["Vie", 88], ["Sáb", 96], ["Dom", 41],
];
const MAX = Math.max(...WEEK.map((w) => w[1]));

const CITAS: [string, string, string][] = [
  ["10:30", "Ana Reyes", "Corte + barba"],
  ["11:15", "Luis Peña", "Tinte y mechas"],
  ["12:00", "María Gómez", "Manicure & pedicure"],
  ["13:30", "Pedro Cruz", "Corte caballero"],
];

const VENTAS: [string, string, string, string, "Pagado" | "Pendiente"][] = [
  ["#1042", "Ana Reyes", "10:24", "RD$ 1,200", "Pagado"],
  ["#1041", "José Martí", "10:02", "RD$ 650", "Pagado"],
  ["#1040", "Carla Díaz", "09:48", "RD$ 2,400", "Pendiente"],
  ["#1039", "Mostrador", "09:31", "RD$ 480", "Pagado"],
  ["#1038", "Luis Peña", "09:15", "RD$ 1,800", "Pagado"],
];

const STOCK: [string, number][] = [
  ["Shampoo Pro 1L", 3], ["Tinte rubio ceniza", 2], ["Cuchillas de barbero", 5], ["Toallas premium", 6],
];

const Icon = ({ d, className = "h-5 w-5" }: { d: string; className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function Page() {
  const [active, setActive] = useState("Resumen");

  return (
    <div
      className="flex min-h-screen w-full bg-slate-100 text-slate-800 antialiased"
      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      {/* ── Sidebar ─────────────────────────────────────────────── */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-900 px-4 py-5 text-slate-300 lg:flex">
        <div className="flex items-center gap-2.5 px-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">G</span>
          <span className="font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
            Gestión
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
                  on ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon d={d} />
                {label}
              </button>
            );
          })}
        </nav>

        <button className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white">
          <Icon d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          Ajustes
        </button>
      </aside>

      {/* ── Main ────────────────────────────────────────────────── */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex items-center gap-4 border-b border-slate-200 bg-white px-5 py-3.5 sm:px-7">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white lg:hidden">G</span>
          <div className="min-w-0">
            <p className="truncate text-[0.92rem] font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Mi Negocio
            </p>
            <p className="truncate text-xs text-slate-400">Santo Domingo · Plan Pro</p>
          </div>
          <div className="ml-auto hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 md:flex">
            <Icon d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" className="h-4 w-4" />
            Buscar venta, cliente…
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
                Resumen de hoy
              </h1>
              <p className="mt-1 text-sm text-slate-500">Lunes 9 de junio · actualizado hace 1 min</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500">
              <Icon d="M12 4.5v15m7.5-7.5h-15" className="h-4 w-4" />
              Nueva venta
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
                <p className="mt-1.5 flex items-center gap-1.5 text-xs">
                  <span className={`rounded-full px-1.5 py-0.5 font-semibold ${k.up ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
                    {k.delta}
                  </span>
                  <span className="text-slate-400">{k.sub}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Chart + Citas */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  Ventas de la semana
                </h2>
                <span className="text-xs text-slate-400">en miles de RD$</span>
              </div>
              <div className="mt-6 flex h-44 items-end gap-3">
                {WEEK.map(([day, v], i) => (
                  <div key={day} className="flex h-full flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-1 items-end">
                      <div
                        className={`w-full rounded-t-md ${i === 5 ? "bg-indigo-600" : "bg-indigo-200"}`}
                        style={{ height: `${(v / MAX) * 100}%` }}
                        title={`${day}: RD$ ${v}k`}
                      />
                    </div>
                    <span className="text-xs text-slate-400">{day}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  Próximas citas
                </h2>
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-600">{CITAS.length}</span>
              </div>
              <ul className="mt-4 flex flex-col divide-y divide-slate-100">
                {CITAS.map(([h, name, serv]) => (
                  <li key={h + name} className="flex items-center gap-3 py-3">
                    <span className="flex h-11 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-slate-50 text-xs font-semibold text-slate-700">
                      {h}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-800">{name}</p>
                      <p className="truncate text-xs text-slate-400">{serv}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ventas recientes + Stock bajo */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  Ventas recientes
                </h2>
                <span className="cursor-pointer text-xs font-semibold text-indigo-600 hover:underline">Ver todas</span>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                    <th className="px-5 py-2.5 font-medium">Folio</th>
                    <th className="px-5 py-2.5 font-medium">Cliente</th>
                    <th className="hidden px-5 py-2.5 font-medium sm:table-cell">Hora</th>
                    <th className="px-5 py-2.5 font-medium">Total</th>
                    <th className="px-5 py-2.5 font-medium">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {VENTAS.map(([folio, cli, hora, total, estado]) => (
                    <tr key={folio} className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-medium text-slate-500">{folio}</td>
                      <td className="px-5 py-3 text-slate-800">{cli}</td>
                      <td className="hidden px-5 py-3 text-slate-400 sm:table-cell">{hora}</td>
                      <td className="px-5 py-3 font-semibold text-slate-900">{total}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                            estado === "Pagado" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  Stock bajo
                </h2>
                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-600">{STOCK.length}</span>
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {STOCK.map(([name, qty]) => (
                  <li key={name} className="flex items-center justify-between gap-3">
                    <span className="truncate text-sm text-slate-700">{name}</span>
                    <span className="shrink-0 rounded-md bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-600">{qty} uds</span>
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50">
                Generar pedido
              </button>
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
