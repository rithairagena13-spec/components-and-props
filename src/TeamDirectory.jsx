
import members from "./data/team";
import MemberGrid from "./components/MemberGrid";
import Panel from "./components/Panel";

export default function TeamDirectory() {
  const handleSelect = (member) => {
    const updatedMember = {
      ...member,
      selected: true
    };

    console.log("Selected team member:", member);
    console.log("Updated copy:", updatedMember);
  };
  const totalMembers = members.length;
const availableMembers = members.filter((member) => member.available).length;
  return (
    <div className="mx-auto max-w-7xl py-10">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
          Our People
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Meet Our Team
        </h1>
        <p className="mt-3 max-w-2xl text-slate-500">
          Get to know the talented people, skills and expertise that make our
          team special.
        </p>
      </div>


<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <p className="text-sm font-medium text-slate-500">Total Team Members</p>
    <h2 className="mt-2 text-3xl font-bold text-slate-900">
      {totalMembers}
    </h2>
  </div>

  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm">
    <p className="text-sm font-medium text-emerald-700">Available Members</p>
    <h2 className="mt-2 text-3xl font-bold text-emerald-800">
      {availableMembers}
    </h2>
  </div>
</div>

      <Panel title="Team Members">
        <MemberGrid members={members} onSelect={handleSelect} />
      </Panel>
    </div>
  );
}
