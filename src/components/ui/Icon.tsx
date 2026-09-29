const paths = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  copy: "M9 9h10v10H9zM5 15V5h10",
  check: "M5 12.5l4.5 4.5L19 7.5",
  close: "M6 6l12 12M18 6L6 18",
  chevronLeft: "M15 5l-7 7 7 7",
  chevronRight: "M9 5l7 7-7 7",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  phone:
    "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  download: "M12 4v11M7 10l5 5 5-5M5 20h14",
  heart: "M12 20s-7-4.4-9.3-9A5 5 0 0112 6a5 5 0 019.3 5c-2.3 4.6-9.3 9-9.3 9z",
} as const;

const brands = {
  facebook: "M14 8h3V4h-3a5 5 0 00-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9a1 1 0 011-1z",
  instagram:
    "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5.5-1.5a1 1 0 100 2 1 1 0 000-2z",
} as const;

export type IconName = keyof typeof paths | keyof typeof brands;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const isBrand = name in brands;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={isBrand ? "currentColor" : "none"}
      stroke={isBrand ? "none" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={
          isBrand
            ? brands[name as keyof typeof brands]
            : paths[name as keyof typeof paths]
        }
      />
    </svg>
  );
}
