"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import styles from "./CopyButton.module.scss";

type CopyButtonProps = {
  value: string;
  label: string;
  className?: string;
};

export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${className ?? ""}`}
      onClick={copy}
      aria-label={`Copia ${label}`}
    >
      <Icon name={copied ? "check" : "copy"} />
      <span aria-live="polite">{copied ? "Copiato!" : "Copia"}</span>
    </button>
  );
}
