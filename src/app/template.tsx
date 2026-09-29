import { PageMotion } from "@/components/motion/PageMotion";

// Il template, a differenza del layout, si rimonta a ogni cambio di pagina:
// è il punto giusto per far ripartire le animazioni della pagina nuova.
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageMotion>{children}</PageMotion>;
}
