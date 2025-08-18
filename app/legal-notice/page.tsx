import PageIntro from "@/components/PageIntro";
import React from "react";

export default function LegalNotice() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="mx-4">
        <div>
          <PageIntro
            heading="Legal notice"
            text="This legal notice outlines the identity of Pachimond Attorneys, the nature of our services, and important disclaimers regarding your use of our website."
          />
        </div>
      </div>
    </section>
  );
}
