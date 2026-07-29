'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { BookOpen, CircleDollarSign, Plane, Truck } from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Codes',
      href: Routes.Codes,
      external: false,
      icon: <CircleDollarSign className="size-4" />,
    },
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: 'Truck',
      href: Routes.TruckUpgrades,
      external: false,
      icon: <Truck className="size-4" />,
    },
    {
      title: 'Trailers',
      href: Routes.Trailers,
      external: false,
      icon: <Truck className="size-4" />,
    },
    {
      title: 'Air Drops',
      href: Routes.AirDrops,
      external: false,
      icon: <Plane className="size-4" />,
    },
  ];
}
