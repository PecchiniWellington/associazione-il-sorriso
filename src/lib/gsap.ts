"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Unico punto di registrazione: ogni componente importa da qui, così nessun
// plugin viene usato prima di essere registrato.
gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  SplitText,
  DrawSVGPlugin,
  Flip,
  ScrollToPlugin
);

gsap.defaults({ ease: "power3.out", duration: 0.9 });

/** Le animazioni partono solo se l'utente non ha chiesto di ridurle. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

export { Flip, gsap, ScrollTrigger, SplitText, useGSAP };
