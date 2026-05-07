'use client'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6 sm:p-8">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-destructive mb-4">
        500
      </h1>

      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center max-w-xl">
        Something went wrong
      </h2>

      <p className="text-lg sm:text-xl text-muted-foreground max-w-lg text-center mb-8">
        An unexpected error occurred. Our team has been notified and is working on a fix.
      </p>

      {error.digest && (
        <p className="text-sm text-muted-foreground mb-6">
          Error ID: <span className="font-mono">{error.digest}</span>
        </p>
      )}

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-6 py-2 border border-border bg-background hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Go home
        </a>
      </div>
    </div>
  )
}
