import type { ServiceIcon } from "@/sanity/types";

const icons: Record<ServiceIcon, React.ReactNode> = {
  website: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  automation: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8l2 2M14 14l2 2M16 8l-2 2M8 16l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ads: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 18V6l8-3 8 3v12l-8 3-8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 3v18M4 6l8 3 8-3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

export function ServiceIcon({ icon }: { icon: ServiceIcon }) {
  return icons[icon] ?? icons.website;
}
