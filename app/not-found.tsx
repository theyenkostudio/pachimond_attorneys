import React from "react";

export default function NotFound() {

  return (
    // Container: Full screen, centered, clean background
    <div className="flex flex-col items-center justify-center bg-background text-foreground p-6">
      {/* Primary Error Code */}
      <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>

      {/* Primary Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
        Jurisdiction Not Found
      </h2>

      {/* Sub-Message with Muted Text */}
      <p className="text-xl text-muted-foreground max-w-lg text-center mb-8">
        The document, file, or resource you requested could not be located on
        our server. This path appears to be **non-existent or has been
        dismissed.**
      </p>

      {/* Legal Metaphor */}
      <div className="bg-secondary p-4 rounded-lg shadow-sm max-w-md text-center mb-10 border border-border">
        <p className="text-lg text-secondary-foreground font-medium">
          "Every case requires precision. We regret this technical error. Please
          return to the home directory to continue."
        </p>
      </div>

      {/* Call to Action Button */}
      {/* Uses bg-primary and text-primary-foreground (likely your blue/black and white text) */}
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
                   h-10 px-4 py-2 
                   bg-primary text-primary-foreground 
                   hover:bg-primary/90 
                   focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Return to Home
      </a>
    </div>
  );
}
