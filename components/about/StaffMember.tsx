import React from "react";
import Image from "next/image";

type StaffMemberProps = {
  name: string;
  job: string;
  image: string;
};

export default function StaffMember({ name, job, image }: StaffMemberProps) {
  return (
    <div className="  overflow-hidden  cursor-pointer">
      <div className="aspect-square lg:aspect-[0.72] relative ">
        <Image src={image} alt={name} fill className="object-cover rounded-2xl" />
      </div>

      <div className="mt-1 lg:mt-3">
        <p className="lg:text-lg font-bold">{name}</p>
        <p className="text-[#232323] text-sm">{job}</p>
      </div>
    </div>
  );
}
