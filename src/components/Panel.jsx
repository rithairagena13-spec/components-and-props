
export default function Panel({ title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-8 border-b border-slate-100 pb-5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Meet the talented people behind our team.
        </p>
      </div>

      {children}
    </section>
  );
}
