import React from "react";
import StaffMember from "./StaffMember";

export default function StaffMembersSection() {
    const staff_members = [
        {
            name: 'Firstname Surname',
            job: 'Legal Practitioner',
            image: "/staff/staff_member_1.jpg"
        },
        {
            name: 'Firstname Surname',
            job: 'Legal Practitioner',
            image: "/staff/staff_member_2.jpg"
        },
        {
            name: 'Firstname Surname',
            job: 'Legal Practitioner',
            image: "/staff/staff_member_3.jpg"
        },
        {
            name: 'Firstname Surname',
            job: 'Legal Practitioner',
            image: "/staff/staff_member_4.jpg"
        },
    ]
  return (
    <section className="max-w-7xl mx-auto mt-10 mb-5 lg:mt-20 lg:mb-10">
      <div className="mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {staff_members.map((member,i)=>(
                <StaffMember key={i} image={member.image} job={member.job} name={member.name} />
            ))}
        </div>

      </div>
    </section>
  );
}
