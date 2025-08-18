import React from "react";
import StaffMember from "./StaffMember";

type StaffMemberType = {
  name: string;
  title: string;
  imageUrl: string;
};

type StaffMembersSectionProps = {
  staffMembers: StaffMemberType[];}

export default function StaffMembersSection({staffMembers}: StaffMembersSectionProps) {
  return (
    <section className="max-w-7xl mx-auto mt-10 mb-5 lg:mt-20 lg:mb-10">
      <div className="mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {staffMembers.map((member, i) => (
            <StaffMember
              key={i}
              image={member.imageUrl}
              job={member.title}
              name={member.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
