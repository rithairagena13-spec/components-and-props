
export default function StatusBadge({ available }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        available
          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
          : "bg-rose-50 text-rose-700 ring-1 ring-rose-200"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          available ? "bg-emerald-500" : "bg-rose-500"
        }`}
      />
      {available ? "Available" : "Busy"}
    </span>
  );
}
