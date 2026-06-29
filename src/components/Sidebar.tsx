"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="shrink-0 px-6 py-8 lg:w-52 lg:px-10 lg:py-14">
        <nav aria-label="Main">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-bold uppercase tracking-wide transition-opacity duration-200 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-35 hover:opacity-65"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <div className="mx-6 h-px bg-black lg:hidden" aria-hidden="true" />
    </>
  );
}
