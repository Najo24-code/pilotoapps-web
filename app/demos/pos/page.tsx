"use client";

import { useMemo, useState } from "react";

/* ── Demo Forja — Punto de venta (caja) INTERACTIVO ────────────────────────
   Terminal de venta: toca productos, arma el ticket, ajusta cantidades y
   cobra. Distinto a los dashboards: aquí mandas tú con el dedo. ─────────── */

type Prod = { id: string; name: string; price: number; cat: string };

const CATS = ["Todos", "Bebidas", "Comida", "Postres"];

const PRODUCTS: Prod[] = [
  { id: "p1", name: "Café americano", price: 90, cat: "Bebidas" },
  { id: "p2", name: "Café con leche", price: 110, cat: "Bebidas" },
  { id: "p3", name: "Jugo natural", price: 130, cat: "Bebidas" },
  { id: "p4", name: "Refresco", price: 80, cat: "Bebidas" },
  { id: "p5", name: "Agua", price: 50, cat: "Bebidas" },
  { id: "p6", name: "Sándwich de pollo", price: 220, cat: "Comida" },
  { id: "p7", name: "Hamburguesa", price: 320, cat: "Comida" },
  { id: "p8", name: "Empanada", price: 70, cat: "Comida" },
  { id: "p9", name: "Ensalada César", price: 280, cat: "Comida" },
  { id: "p10", name: "Tres golpes", price: 350, cat: "Comida" },
  { id: "p11", name: "Flan", price: 120, cat: "Postres" },
  { id: "p12", name: "Brownie", price: 140, cat: "Postres" },
  { id: "p13", name: "Tres leches", price: 160, cat: "Postres" },
  { id: "p14", name: "Helado", price: 100, cat: "Postres" },
];

const CAT_COLOR: Record<string, string> = {
  Bebidas: "bg-sky-400",
  Comida: "bg-amber-400",
  Postres: "bg-rose-400",
};

const fmt = (n: number) =>
  "RD$ " + n.toLocaleString("es-DO", { minimumFractionDigits: n % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 });

type Line = Prod & { qty: number };

export default function Page() {
  const [cat, setCat] = useState("Todos");
  const [cart, setCart] = useState<Line[]>([
    { ...PRODUCTS[1], qty: 2 },
    { ...PRODUCTS[6], qty: 1 },
    { ...PRODUCTS[2], qty: 1 },
  ]);
  const [pay, setPay] = useState("Efectivo");
  const [done, setDone] = useState<number | null>(null);

  const shown = cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  const subtotal = useMemo(() => cart.reduce((s, l) => s + l.price * l.qty, 0), [cart]);
  const itbis = Math.round(subtotal * 0.18 * 100) / 100;
  const total = subtotal + itbis;

  const add = (p: Prod) =>
    setCart((c) => {
      const f = c.find((l) => l.id === p.id);
      return f ? c.map((l) => (l.id === p.id ? { ...l, qty: l.qty + 1 } : l)) : [...c, { ...p, qty: 1 }];
    });
  const step = (id: string, d: number) =>
    setCart((c) => c.map((l) => (l.id === id ? { ...l, qty: l.qty + d } : l)).filter((l) => l.qty > 0));

  return (
    <div
      className="flex min-h-screen w-full flex-col bg-slate-100 text-slate-800 antialiased"
      style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
    >
      {/* Topbar */}
      <header className="flex items-center gap-4 border-b border-slate-200 bg-white px-5 py-3 sm:px-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 font-bold text-white">$</span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
            Caja #2
          </p>
          <p className="truncate text-xs text-slate-400">Cajero: JS · turno mañana</p>
        </div>
        <div className="ml-auto hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 md:flex">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
          Buscar producto…
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">Caja abierta</span>
      </header>

      <div className="flex flex-1 flex-col gap-5 p-5 lg:flex-row">
        {/* Productos */}
        <section className="flex-1">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  cat === c ? "bg-sky-600 text-white" : "bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {shown.map((p) => (
              <button
                key={p.id}
                onClick={() => add(p)}
                className="group flex flex-col items-start rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${CAT_COLOR[p.cat]}`} />
                <span className="mt-3 text-sm font-medium leading-tight text-slate-800">{p.name}</span>
                <span className="mt-1 font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
                  {fmt(p.price)}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Ticket */}
        <aside className="flex w-full shrink-0 flex-col rounded-2xl border border-slate-200 bg-white shadow-sm lg:w-96">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <h2 className="font-semibold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>
              Ticket #0042
            </h2>
            <span className="rounded-full bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-600">
              {cart.reduce((s, l) => s + l.qty, 0)} art.
            </span>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-3" style={{ maxHeight: 360 }}>
            {cart.length === 0 ? (
              <p className="py-12 text-center text-sm text-slate-400">Toca un producto para empezar la venta.</p>
            ) : (
              <ul className="flex flex-col divide-y divide-slate-100">
                {cart.map((l) => (
                  <li key={l.id} className="flex items-center gap-3 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-slate-800">{l.name}</p>
                      <p className="text-xs text-slate-400">{fmt(l.price)} c/u</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => step(l.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-50">−</button>
                      <span className="w-5 text-center text-sm font-semibold text-slate-700">{l.qty}</span>
                      <button onClick={() => step(l.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:bg-slate-50">+</button>
                    </div>
                    <span className="w-20 shrink-0 text-right text-sm font-semibold text-slate-900">{fmt(l.price * l.qty)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-slate-100 px-5 py-4">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Subtotal</span>
              <span>{fmt(subtotal)}</span>
            </div>
            <div className="mt-1 flex justify-between text-sm text-slate-500">
              <span>ITBIS (18%)</span>
              <span>{fmt(itbis)}</span>
            </div>
            <div className="mt-2 flex items-end justify-between border-t border-dashed border-slate-200 pt-3">
              <span className="font-semibold text-slate-900">Total</span>
              <span className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>{fmt(total)}</span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Efectivo", "Tarjeta", "Transferencia"].map((m) => (
                <button
                  key={m}
                  onClick={() => setPay(m)}
                  className={`rounded-lg border px-2 py-2 text-xs font-semibold transition-colors ${
                    pay === m ? "border-sky-600 bg-sky-50 text-sky-700" : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <button
              disabled={cart.length === 0}
              onClick={() => {
                setDone(total);
                setCart([]);
              }}
              className="mt-3 w-full rounded-xl bg-sky-600 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Cobrar {cart.length > 0 ? fmt(total) : ""}
            </button>
          </div>
        </aside>
      </div>

      {/* Éxito */}
      {done !== null && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/40 p-4" onClick={() => setDone(null)}>
          <div className="w-full max-w-sm rounded-2xl bg-white p-7 text-center shadow-xl">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-900" style={{ fontFamily: "var(--font-display)" }}>Venta registrada</h3>
            <p className="mt-1 text-sm text-slate-500">Cobrado {fmt(done)} en {pay.toLowerCase()}. Inventario actualizado.</p>
            <button onClick={() => setDone(null)} className="mt-5 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Nueva venta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
