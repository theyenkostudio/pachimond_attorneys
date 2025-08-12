import React from "react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Litigation",
      image: "/services/litigation.jpg",
      description: "Expert representation in complex legal disputes",
    },
    {
      title: "Commercial Law",
      image: "/services/commercial.jpg",
      description: "Comprehensive business legal solutions",
    },
    {
      title: "Corporate Law",
      image: "/services/corporate.jpg",
      description: "Strategic corporate legal counsel",
    },
    {
      title: "IP Law",
      image: "/services/ip.jpg",
      description: "Intellectual property protection and enforcement",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        <div className="lg:flex lg:gap-4">
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl lg:w-1/2">
            When the stakes are high, we deliver solutions.
          </p>
          <p className="text-sm mt-2 lg:w-1/2">
            Every legal challenge deserves a smart, tailored solution. Our
            specialized practice areas help individuals and businesses overcome
            obstacles, protect their interests, and move forward with
            confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 mt-5 lg:mt-7">
          {services.map((service, i) => (
            <ServiceCard key={i} img={service.image} title={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
