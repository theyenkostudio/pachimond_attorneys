export function formatDate(isoString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(isoString);

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    ...options, 
  });

  return formatter.format(date);
}
