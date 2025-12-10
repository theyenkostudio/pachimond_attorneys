'use client'

import React from 'react';

export default function ErrorPage({ errorCode = '500', errorTitle = 'Internal Server Malfunction' }) {
  return (
    // Container: Full screen, centered, clean background
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6 sm:p-8">
      
      {/* Primary Error Indicator: Using the destructive color for urgency */}
      {/* Responsive Scaling: text-6xl (mobile) -> md:text-8xl -> lg:text-9xl */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-destructive mb-4">
        {errorCode}
      </h1>

      {/* Primary Heading */}
      {/* Responsive Scaling: text-3xl (mobile) -> md:text-5xl */}
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center max-w-xl">
        {errorTitle}
      </h2>
      
      {/* Sub-Message with Muted Text */}
      {/* Responsive Scaling: text-lg (mobile) -> sm:text-xl */}
      <p className="text-lg sm:text-xl text-muted-foreground max-w-lg text-center mb-8">
        An unforeseen technical exception has been raised, interrupting the service. This issue is typically server-side and is under immediate review.
      </p>

      {/* Action/Instruction Block */}
      <div className="bg-muted p-6 rounded-lg shadow-sm max-w-lg w-full md:w-3/4 lg:w-1/2 text-left mb-10 border border-border">
        <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3">
          Required Remedial Action
        </h3>
        <ul className="list-disc list-inside text-base sm:text-lg text-foreground space-y-3">
          <li>
            Please <span className="font-bold">do not attempt to refresh</span> sensitive data pages.
          </li>
          <li>
            Return to the main page to <span className="font-bold">re-establish a secure session.</span>
          </li>
          <li>
            If the problem persists, please <span className="font-bold">contact our support team</span> with the error code (E-{errorCode}).
          </li>
        </ul>
      </div>

      {/* Call to Action Button */}
      {/* Uses bg-primary and text-primary-foreground (your brand colors) */}
      <a 
        href="/" 
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors 
                   h-10 px-6 py-2 
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
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        Proceed to Secure Main Portal
      </a>
      
    </div>
  );
}
