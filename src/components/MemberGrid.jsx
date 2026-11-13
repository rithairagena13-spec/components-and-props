
import MemberCard from "./MemberCard";

export default function MemberGrid({ members, onSelect }) {
  if (members.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <h2 className="text-lg font-bold text-slate-800">
          No team members found
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          There are currently no members to display.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
