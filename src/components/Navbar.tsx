"use client";

import { usePathname } from "next/navigation";
import { User, Briefcase, FileText } from "lucide-react";

type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
  icon: React.ReactNode;
};

function NavItem({ title, url, isSelected, icon }: NavItemProps) {
  return (
    <li>
      <a
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
          isSelected ? "text-teal-500 font-semibold" : "text-zinc-800 hover:text-teal-500"
        }`}
        href={url}
      >
        {icon}
        <span>{title}</span>
      </a>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center mx-auto max-w-7xl h-20 pt-10">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-8 text-sm font-medium textzinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <NavItem
            title="Tentang Saya"
            url="/"
            isSelected={pathname === "/"}
            icon={<User size={16} />}
          />
          <NavItem
            title="Proyek"
            url="/projects"
            isSelected={pathname === "/projects"}
            icon={<Briefcase size={16} />}
          />
          <NavItem
            title="Esai"
            url="/essays"
            isSelected={pathname === "/essays"}
            icon={<FileText size={16} />}
          />
        </ul>
      </nav>
    </div>
  );
}
