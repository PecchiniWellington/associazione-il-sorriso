"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { navigation, site } from "@/data/site";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { lockScroll } from "./SmoothScroll";
import styles from "./Header.module.scss";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>(null);

  // Si nasconde scorrendo verso il basso e ricompare appena si risale.
  useGSAP(() => {
    const element = header.current!;
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const scrolled = self.scroll() > 24;
        element.dataset.scrolled = String(scrolled);
        element.dataset.hidden = String(
          self.direction === 1 && self.scroll() > 160
        );
      },
    });
  });

  useGSAP(
    () => {
      timeline.current = gsap
        .timeline({ paused: true })
        .set(menu.current, { visibility: "visible" })
        .fromTo(
          menu.current,
          { clipPath: "circle(0% at calc(100% - 44px) 38px)" },
          {
            clipPath: "circle(150% at calc(100% - 44px) 38px)",
            duration: 0.8,
            ease: "power4.inOut",
          }
        )
        .from(
          "[data-menu-item]",
          { yPercent: 120, stagger: 0.05, duration: 0.7, ease: "expo.out" },
          "-=0.35"
        )
        .from("[data-menu-foot]", { autoAlpha: 0, y: 20 }, "-=0.4");
    },
    { scope: menu }
  );

  useEffect(() => {
    lockScroll(open);
    if (open) timeline.current?.timeScale(1).play();
    else timeline.current?.timeScale(1.6).reverse();
  }, [open]);

  // Qualunque link cliccato (menu, logo, bottone) chiude il menu.
  function closeOnNavigation(event: React.MouseEvent) {
    if ((event.target as HTMLElement).closest("a")) setOpen(false);
  }

  return (
    <header
      ref={header}
      className={styles.header}
      data-open={open}
      onClick={closeOnNavigation}
    >
      <div className={`container ${styles.bar}`}>
        <Logo className={styles.logo} />

        <nav aria-label="Principale" className={styles.desktopNav}>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.link}
                  aria-current={
                    isCurrent(pathname, item.href) ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/sostienici/" className={`btn ${styles.cta}`}>
          Sostienici
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        ref={menu}
        id="menu-mobile"
        className={styles.menu}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Menu mobile" className="container">
          <ul className={styles.menuList}>
            {[...navigation, { label: "Sostienici", href: "/sostienici/" }].map(
              (item) => (
                <li key={item.href} className={styles.menuItem}>
                  <Link href={item.href} data-menu-item>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className={styles.menuFoot} data-menu-foot>
            <a href={site.phone.href}>
              <Icon name="phone" /> {site.phone.label}
            </a>
            <a href={`mailto:${site.email}`}>
              <Icon name="mail" /> {site.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
