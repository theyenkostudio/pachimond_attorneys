import React from "react";

type StatCardProps = {
  rating: string;
  text: string;
};

export default function StatCard({ rating, text }: StatCardProps) {
  return (
    <div className="bg-[#E8F5FD] p-3 text-[#0C5380] w-fit rounded-sm">
      <p className="font-bold text-lg lg:text-xl">{rating}</p>
      <p className="text-sm ">{text}</p>
    </div>
  );
}
