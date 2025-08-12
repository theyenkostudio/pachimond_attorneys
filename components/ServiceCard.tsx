import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  img: string;
  title: string;
};

export default function ServiceCard({ img, title }: ServiceCardProps) {
  return (
    <div className="rounded-2xl relative overflow-hidden aspect-square lg:aspect-[0.72] cursor-pointer">
      <div>
        <Image
          src={img || "/placeholder.svg"}
          alt={`${title} legal services`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className=" flex items-center justify-center ">
            <h3 className="text-white font-semibold border px-4 rounded-md">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
