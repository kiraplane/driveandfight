'use client';

import { Badge } from '@/components/ui/badge';
import { codeStatusSummary } from '@/data/driveandfight/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  CircleDollarSign,
  Compass,
  ExternalLink,
  Fuel,
  Gauge,
  Keyboard,
  PackageOpen,
  Plane,
  RefreshCw,
  Route,
  Shield,
  Trophy,
  Truck,
  Users,
  Zap,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: Array<{ href: string; label: string }>;
}

export const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Wiki Home' },
      { href: '/codes', label: 'Current Codes' },
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/beginner-guide', label: 'Beginner Route' },
      { href: '/official-links', label: 'Official Links' },
    ],
  },
  {
    title: 'Build the Truck',
    icon: Truck,
    links: [
      { href: '/truck-upgrades', label: 'Truck Upgrades' },
      { href: '/trailers', label: 'Trailers & Mobile Base' },
      { href: '/weapons-and-armor', label: 'Weapons & Armor' },
      { href: '/skills', label: 'Skills & XP' },
    ],
  },
  {
    title: 'Survive the Run',
    icon: Route,
    links: [
      { href: '/guides/first-1000-meters', label: 'First 1,000 Meters' },
      { href: '/air-drops', label: 'Air Drops' },
      { href: '/guides/multiplayer-guide', label: 'Co-op Roles' },
      { href: '/guides/how-to-win', label: 'How to Win' },
    ],
  },
  {
    title: 'Tools & Status',
    icon: RefreshCw,
    links: [
      {
        href: '/guides/controls-and-inventory',
        label: 'Controls & Inventory',
      },
      {
        href: '/guides/fuel-and-supply-checklist',
        label: 'Fuel & Supply Checklist',
      },
      { href: '/updates', label: 'Beta Updates' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

const iconMap = {
  '/': Compass,
  '/codes': CircleDollarSign,
  '/guides': BookOpen,
  '/guides/beginner-guide': Compass,
  '/guides/first-1000-meters': Gauge,
  '/guides/how-to-win': Trophy,
  '/guides/multiplayer-guide': Users,
  '/guides/controls-and-inventory': Keyboard,
  '/guides/fuel-and-supply-checklist': Fuel,
  '/truck-upgrades': Truck,
  '/trailers': PackageOpen,
  '/weapons-and-armor': Shield,
  '/skills': Zap,
  '/air-drops': Plane,
  '/official-links': ExternalLink,
  '/updates': RefreshCw,
};

function isActivePath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function groupIsActive(currentPath: string | undefined, group: WikiNavGroup) {
  if (!currentPath) return false;
  return group.links.some((link) => isActivePath(currentPath, link.href));
}

function NavLink({
  currentPath,
  href,
  label,
}: { currentPath?: string; href: string; label: string }) {
  const active = isActivePath(currentPath, href);
  const Icon = iconMap[href as keyof typeof iconMap] ?? ArrowRight;
  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition',
        active
          ? 'border-[#FFD08A]/70 bg-[#F3A23A] font-bold text-[#17100A] shadow-[0_0_22px_rgba(243,162,58,.16)]'
          : 'border-white/8 bg-white/[.025] text-stone-300 hover:border-[#B9402A]/55 hover:bg-[#B9402A]/10 hover:text-white'
      )}
    >
      <span className="inline-flex min-w-0 items-start gap-2.5">
        <Icon className="mt-0.5 size-4 shrink-0" />
        <span className="min-w-0 whitespace-normal break-words">{label}</span>
      </span>
      <ArrowRight
        className={cn(
          'mt-0.5 size-3.5 shrink-0 transition group-hover:translate-x-0.5',
          active ? 'text-[#17100A]' : 'text-[#E8C36A]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return (
    <div className="space-y-3">
      {wikiNavGroups.map((group) => {
        const Icon = group.icon;
        return (
          <details
            key={group.title}
            open={groupIsActive(currentPath, group)}
            className="group/nav"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-2 font-semibold text-sm text-stone-200 hover:bg-white/5 [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2">
                <Icon className="size-4 text-[#F3A23A]" />
                {group.title}
              </span>
              <span className="inline-flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="h-5 border-white/10 px-1.5 text-[10px] text-stone-400"
                >
                  {group.links.length}
                </Badge>
                <ChevronDown className="size-4 transition group-open/nav:rotate-180" />
              </span>
            </summary>
            <div className="mt-1 grid gap-1.5">
              {group.links.map((link) => (
                <NavLink key={link.href} currentPath={currentPath} {...link} />
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}

export function DriveAndFightMobileMenu({
  currentPath,
}: { currentPath?: string }) {
  return (
    <details className="rounded-xl border border-[#B9402A]/30 bg-[#141816] p-4 shadow-xl lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-white [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <Compass className="size-5 text-[#F3A23A]" />
          Open Wiki Menu
        </span>
        <ChevronDown className="size-5" />
      </summary>
      <div className="mt-4">
        <NavGroups currentPath={currentPath} />
      </div>
    </details>
  );
}

export function DriveAndFightRouteSidebar({
  currentPath,
}: { currentPath?: string }) {
  return (
    <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-[276px] shrink-0 self-start overflow-y-auto rounded-xl border border-[#B9402A]/25 bg-[#141816] p-4 shadow-2xl shadow-black/30 lg:block">
      <div className="mb-4 rounded-xl border border-[#F3A23A]/25 bg-[radial-gradient(circle_at_top_right,rgba(185,64,42,.25),transparent_48%),linear-gradient(135deg,#20221B,#0C0F0D)] p-4">
        <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#F3A23A]">
          Drive and Fight
        </p>
        <h2 className="mt-1 text-xl font-black text-white">Wiki Navigation</h2>
        <p className="mt-2 text-xs leading-5 text-stone-400">
          Codes, truck upgrades, trailers, loot, skills, events, and run guides.
        </p>
      </div>
      <NavGroups currentPath={currentPath} />
      <LocaleLink
        href="/codes"
        className="mt-4 flex min-w-0 items-center justify-between gap-3 rounded-lg border border-[#E8C36A]/25 bg-[#E8C36A]/5 p-3 text-sm text-[#F0D994] hover:bg-[#E8C36A]/10"
      >
        <span className="min-w-0">
          <strong className="block text-white">Codes checked Jul 29</strong>
          {codeStatusSummary.activeCount} official active code
        </span>
        <CircleDollarSign className="size-5 shrink-0" />
      </LocaleLink>
    </aside>
  );
}

export function DriveAndFightPageShell({ children }: { children: ReactNode }) {
  const currentPath = useLocalePathname();
  if (currentPath === '/') return <>{children}</>;
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6">
      <DriveAndFightMobileMenu currentPath={currentPath} />
      <div className="mt-6 grid gap-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_276px]">
        <div className="min-w-0">{children}</div>
        <DriveAndFightRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}
