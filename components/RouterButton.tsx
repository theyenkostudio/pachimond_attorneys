"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export default function RouterButton({ path }: { path: string }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(path)}
      className="bg-gradient-to-r from-[#093F61] to-[#009CFF] text-white p-5 text-base font-semibold rounded-lg inline-flex items-center gap-2"
    >
      Book a Consultation
      <Phone className="h-5 w-5" />
    </Button>
  );
}
