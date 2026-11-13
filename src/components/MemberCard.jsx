
import StatusBadge from "./StatusBadge";

export default function MemberCard({ member, onSelect }) {
  const {
    name,
    role = "Team Member",
    city = "Location not specified",
    available,
    skills = []
  } = member;

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-xl font-bold text-indigo-700">
          {name.charAt(0)}
        </div>
        <StatusBadge available={available} />
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          {name}
        </h2>
        <p className="mt-1 font-medium text-indigo-600">{role}</p>
        <p className="mt-2 text-sm text-slate-500">{city}</p>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => onSelect?.(member)}
        className="mt-6 flex w-full items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
      >
        View profile
        <span>→</span>
      </button>
    </article>
  );
}
