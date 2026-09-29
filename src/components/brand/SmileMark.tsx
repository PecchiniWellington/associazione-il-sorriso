type SmileMarkProps = {
  className?: string;
  /** Senza titolo il segno è decorativo e viene nascosto agli screen reader. */
  title?: string;
};

/**
 * Il simbolo dell'associazione: il cerchio giallo con la faccina «:)».
 * Le parti hanno `data-smile` per poterle animare singolarmente con GSAP;
 * i colori si cambiano con `--smile-face` e `--smile-ink`.
 */
export function SmileMark({ className, title }: SmileMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <circle
        data-smile="face"
        cx="50"
        cy="50"
        r="50"
        fill="var(--smile-face, var(--yellow))"
      />
      <g data-smile="eyes" fill="var(--smile-ink, var(--black))">
        <circle cx="38" cy="37" r="6.5" />
        <circle cx="38" cy="63" r="6.5" />
      </g>
      <path
        data-smile="mouth"
        d="M56 23 C 73 37, 73 63, 56 77"
        fill="none"
        stroke="var(--smile-ink, var(--black))"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}
