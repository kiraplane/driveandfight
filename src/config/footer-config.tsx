'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Wiki',
      items: [
        { title: 'Codes', href: Routes.Codes, external: false },
        { title: 'All Guides', href: Routes.Guides, external: false },
        {
          title: 'Truck Upgrades',
          href: Routes.TruckUpgrades,
          external: false,
        },
        { title: 'Trailers', href: Routes.Trailers, external: false },
        { title: 'Air Drops', href: Routes.AirDrops, external: false },
        {
          title: 'Official Links',
          href: Routes.OfficialLinks,
          external: false,
        },
      ],
    },
    {
      title: 'Player Guides',
      items: [
        {
          title: 'Beginner Route',
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: 'First 1,000 Meters',
          href: Routes.First1000Meters,
          external: false,
        },
        {
          title: 'How to Win',
          href: Routes.HowToWin,
          external: false,
        },
        {
          title: 'Co-op Roles',
          href: Routes.MultiplayerGuide,
          external: false,
        },
        {
          title: 'Fuel Checklist',
          href: Routes.SupplyChecklist,
          external: false,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          title: 'Privacy Policy',
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: 'Terms of Service',
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: 'Cookie Policy',
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: 'Disclaimer',
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
